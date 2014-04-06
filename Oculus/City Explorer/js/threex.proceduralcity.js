// from @mrdoob http://www.mrdoob.com/lab/javascript/webgl/city/01/
var updateFcts = [];
var riftCam;
var scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0xd0e0f0, 0.0025);

var renderer = new THREE.WebGLRenderer({
    antialias: false
});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.01, 3000)
camera.position.y = 80

var light = new THREE.HemisphereLight(0xfffff0, 0x101020, 1.25);
light.position.set(0.75, 1, 0.25);
scene.add(light);

var material = new THREE.MeshBasicMaterial({
    color: 0x101018
})
var geometry = new THREE.PlaneGeometry(2000, 2000)
var plane = new THREE.Mesh(geometry, material);
plane.rotation.x = -90 * Math.PI / 180;
scene.add(plane);

var city = new THREEx.ProceduralCity()
scene.add(city)

var controls = new THREE.FirstPersonControls(camera);
controls.movementSpeed = 20;
controls.lookSpeed = 0.05;
controls.lookVertical = true;
updateFcts.push(function (delta, now) {
    controls.update(delta);
})

updateFcts.push(function () {
    renderer.render(scene, camera);
})

var lastTimeMsec = null
requestAnimationFrame(function animate(nowMsec) {
    // keep looping
    requestAnimationFrame(animate);
    // measure time
    lastTimeMsec = lastTimeMsec || nowMsec - 1000 / 60
    var deltaMsec = Math.min(200, nowMsec - lastTimeMsec)
    lastTimeMsec = nowMsec
    // call each update function
    updateFcts.forEach(function (updateFn) {
        updateFn(deltaMsec / 1000, nowMsec / 1000)
    })
})

/*Regular Code*/
var THREEx = THREEx || {}

THREEx.ProceduralCity = function () {
    // build the base geometry for each building
    var geometry = new THREE.CubeGeometry(1, 1, 1);
    // translate the geometry to place the pivot point at the bottom instead of the center
    geometry.applyMatrix(new THREE.Matrix4().makeTranslation(0, 0.5, 0));
    // get rid of the bottom face - it is never seen
    geometry.faces.splice(3, 1);
    geometry.faceVertexUvs[0].splice(3, 1);
    // change UVs for the top face
    // - it is the roof so it wont use the same texture as the side of the building
    // - set the UVs to the single coo rdinate 0,0. so the roof will be the same color
    //   as a floor row.
    geometry.faceVertexUvs[0][2][0].set(0, 0);
    geometry.faceVertexUvs[0][2][1].set(0, 0);
    geometry.faceVertexUvs[0][2][2].set(0, 0); 
    geometry.faceVertexUvs[0][2][3].set(0, 0);
    // buildMesh
    var buildingMesh = new THREE.Mesh(geometry);

    // base colors for vertexColors. light is for vertices at the top, shaddow is for the ones at the bottom
    var light = new THREE.Color(0xffffff)
    var shadow = new THREE.Color(0x303050)

    var cityGeometry = new THREE.Geometry();
    for (var i = 0; i < 20000; i++) {
        // put a random position
        buildingMesh.position.x = Math.floor(Math.random() * 200 - 100) * 10;
        buildingMesh.position.z = Math.floor(Math.random() * 200 - 100) * 10;
        // put a random rotation
        buildingMesh.rotation.y = Math.random() * Math.PI * 2;
        // put a random scale
        buildingMesh.scale.x = Math.random() * Math.random() * Math.random() * Math.random() * 50 + 10;
        buildingMesh.scale.y = (Math.random() * Math.random() * Math.random() * buildingMesh.scale.x) * 8 + 8;
        buildingMesh.scale.z = buildingMesh.scale.x

        // establish the base color for the buildingMesh
        var value = 1 - Math.random() * Math.random();
        var baseColor = new THREE.Color().setRGB(value + Math.random() * 0.1, value, value + Math.random() * 0.1);
        // set topColor/bottom vertexColors as adjustement of baseColor
        var topColor = baseColor.clone().multiply(light);
        var bottomColor = baseColor.clone().multiply(shadow);
        // set .vertexColors for each face
        var geometry = buildingMesh.geometry;
        for (var j = 0, jl = geometry.faces.length; j < jl; j++) {
            if (j === 2) {
                // set face.vertexColors on root face
                geometry.faces[j].vertexColors = [baseColor, baseColor, baseColor, baseColor];
            } else {
                // set face.vertexColors on sides faces
                geometry.faces[j].vertexColors = [topColor, bottomColor, bottomColor, topColor];
            }
        }
        // merge it with cityGeometry - very important for performance
        THREE.GeometryUtils.merge(cityGeometry, buildingMesh);
    }

    // generate the texture
    var texture = new THREE.Texture(generateTextureCanvas());
    texture.anisotropy = renderer.getMaxAnisotropy();
    texture.needsUpdate = true;

    // build the mesh
    var material = new THREE.MeshLambertMaterial({
        map: texture,
        vertexColors: THREE.VertexColors
    });
    var mesh = new THREE.Mesh(cityGeometry, material);
    return mesh

    function generateTextureCanvas() {
        // build a small canvas 32x64 and paint it in white
        var canvas = document.createElement('canvas');
        canvas.width = 32;
        canvas.height = 64;
        var context = canvas.getContext('2d');
        // plain it in white
        context.fillStyle = '#ffffff';
        context.fillRect(0, 0, 32, 64);
        // draw the window rows - with a small noise to simulate light variations in each room
        for (var y = 2; y < 64; y += 2) {
            for (var x = 0; x < 32; x += 2) {
                var value = Math.floor(Math.random() * 64);
                context.fillStyle = 'rgb(' + [value, value, value].join(',') + ')';
                context.fillRect(x, y, 2, 1);
            }
        }

        // build a bigger canvas and copy the small one in it
        // This is a trick to upscale the texture without filtering
        var canvas2 = document.createElement('canvas');
        canvas2.width = 512;
        canvas2.height = 1024;
        var context = canvas2.getContext('2d');
        // disable smoothing
        context.imageSmoothingEnabled = false;
        context.webkitImageSmoothingEnabled = false;
        context.mozImageSmoothingEnabled = false;
        // then draw the image
        context.drawImage(canvas, 0, 0, canvas2.width, canvas2.height);
        // return the just built canvas2
        return canvas2;
    }
}
function init(){
	document.addEventListener('keydown', onKeyDown, false);
	document.addEventListener('keyup', onKeyUp, false);
	document.addEventListener('mousedown', onMouseDown, false);
	document.addEventListener('mousemove', onMouseMove, false);

	document.getElementById("toggle-render").addEventListener("click", function(){
	  useRift = !useRift;
	  onResize();
	});

	window.addEventListener('resize', onResize, false);
    oculusBridge.connect();

    riftCam = new THREE.OculusRiftEffect(renderer);
}

function onResize() {
  if(!useRift){
    windowHalf = new THREE.Vector2(window.innerWidth / 2, window.innerHeight / 2);
    aspectRatio = window.innerWidth / window.innerHeight;
   
    camera.aspect = aspectRatio;
    camera.updateProjectionMatrix();
   
    renderer.setSize(window.innerWidth, window.innerHeight);
  } else {
    riftCam.setSize(window.innerWidth, window.innerHeight);
  }
}

function bridgeConnected(){
  document.getElementById("logo").className = "";
}

function bridgeDisconnected(){
  document.getElementById("logo").className = "offline";
}

function bridgeConfigUpdated(config){
  console.log("Oculus config updated.");
  riftCam.setHMD(config);      
}

function bridgeOrientationUpdated(quatValues) {

  // Do first-person style controls (like the Tuscany demo) using the rift and keyboard.

  // TODO: Don't instantiate new objects in here, these should be re-used to avoid garbage collection.

  // make a quaternion for the the body angle rotated about the Y axis.
  var quat = new THREE.Quaternion();
  quat.setFromAxisAngle(bodyAxis, bodyAngle);

  // make a quaternion for the current orientation of the Rift
  var quatCam = new THREE.Quaternion(quatValues.x, quatValues.y, quatValues.z, quatValues.w);

  // multiply the body rotation by the Rift rotation.
  quat.multiply(quatCam);


  // Make a vector pointing along the Z axis and rotate it accoring to the combined look/body angle.
  var xzVector = new THREE.Vector3(0, 0, 1);
  xzVector.applyQuaternion(quat);

  // Compute the X/Z angle based on the combined look/body angle.  This will be used for FPS style movement controls
  // so you can steer with a combination of the keyboard and by moving your head.
  viewAngle = Math.atan2(xzVector.z, xzVector.x) + Math.PI;

  // Apply the combined look/body angle to the camera.
  camera.quaternion.copy(quat);
}


function onMouseMove(event) {
  mouse.set( (event.clientX / window.innerWidth - 0.5) * 2, (event.clientY / window.innerHeight - 0.5) * 2);
}


function onMouseDown(event) {
  // Stub
  floorTexture.needsUpdate = true;
  console.log("update.");
}


function onKeyDown(event) {

  if(event.keyCode == 48){ // zero key.
    useRift = !useRift;
    onResize();
  }

  // prevent repeat keystrokes.
  if(!keys[32] && (event.keyCode == 32)){ // Spacebar to jump
    velocity.y += 1.9;
  }

  keys[event.keyCode] = true;
}


function onKeyUp(event) {
  keys[event.keyCode] = false;
}


function updateInput(delta) {
  
  var step        = 25 * delta;
  var turn_speed  = (55 * delta) * Math.PI / 180;


  // Forward/backward

  if(keys[87] || keys[38]){ // W or UP
      bodyPosition.x += Math.cos(viewAngle) * step;
      bodyPosition.z += Math.sin(viewAngle) * step;
  }

  if(keys[83] || keys[40]){ // S or DOWN
      bodyPosition.x -= Math.cos(viewAngle) * step;
      bodyPosition.z -= Math.sin(viewAngle) * step;
  }

  // Turn

  if(keys[81]){ // E
      bodyAngle += turn_speed;
  }   
  
  if(keys[69]){ // Q
       bodyAngle -= turn_speed;
  }

  // Straif

  if(keys[65] || keys[37]){ // A or LEFT
      bodyPosition.x -= Math.cos(viewAngle + Math.PI/2) * step;
      bodyPosition.z -= Math.sin(viewAngle + Math.PI/2) * step;
  }   
  
  if(keys[68] || keys[39]){ // D or RIGHT
      bodyPosition.x += Math.cos(viewAngle+Math.PI/2) * step;
      bodyPosition.z += Math.sin(viewAngle+Math.PI/2) * step;
  }
  

  // VERY simple gravity/ground plane physics for jumping.
  
  velocity.y -= 0.15;
  
  bodyPosition.y += velocity.y;
  
  if(bodyPosition.y < 15){
    velocity.y *= -0.12;
    bodyPosition.y = 15;
  }

  // update the camera position when rendering to the oculus rift.
  if(useRift) {
    camera.position.set(bodyPosition.x, bodyPosition.y, bodyPosition.z);
  }
}


function animate() {
  var delta = clock.getDelta();
  time += delta;
  
  updateInput(delta);
  for(var i = 0; i < core.length; i++){
    core[i].rotation.x += delta * 0.25;
    core[i].rotation.y -= delta * 0.33;
    core[i].rotation.z += delta * 0.1278;
  }

  var bounds = 600;
  for(var i = 0; i < dataPackets.length; i++){
    dataPackets[i].obj.position.add( dataPackets[i].speed);
    if(dataPackets[i].obj.position.x < -bounds) {
      dataPackets[i].obj.position.x = bounds;
    } else if(dataPackets[i].obj.position.x > bounds){
      dataPackets[i].obj.position.x = -bounds;
    }
    if(dataPackets[i].obj.position.z < -bounds) {
      dataPackets[i].obj.position.z = bounds;
    } else if(dataPackets[i].obj.position.z > bounds){
      dataPackets[i].obj.position.z = -bounds;
    }
  }

  
  if(render()){
    requestAnimationFrame(animate);  
  }
}

function crashSecurity(e){
  oculusBridge.disconnect();
  document.getElementById("viewport").style.display = "none";
  document.getElementById("security_error").style.display = "block";
}

function crashOther(e){
  oculusBridge.disconnect();
  document.getElementById("viewport").style.display = "none";
  document.getElementById("generic_error").style.display = "block";
  document.getElementById("exception_message").innerHTML = e.message;
}

function render() { 
  try{
    if(useRift){
      riftCam.render(scene, camera);
    }else{
      controls.update();
      renderer.render(scene, camera);
    }  
  } catch(e){
    console.log(e);
    if(e.name == "SecurityError"){
      crashSecurity(e);
    } else {
      crashOther(e);
    }
    return false;
  }
  return true;
}

window.onLoad(){
	init();
}
