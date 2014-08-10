/*Setting up camera, canvas, and scene*/
var width = 400;
var height = 300;

var view_angle = 45;
var aspect = width/height;
var near = 0.1;
var far = 10000;

var $container = $('#container');

var renderer = new THREE.WebGLRenderer();
var camera = new THREE.PerspectiveCamera(view_angle, aspect, near, far);

var scene = new THREE.Scene();

scene.add(camera);
camera.position.z = 300;
renderer.setSize(width, height);

$container.append(renderer.domElement);

/*Setting up shapes*/
var radius = 50;
var segments = 16;
var rings = 16;

/*Defining sphereMaterial*/
var sphereMaterial = new THREE.MeshLambertMaterial({color:0xCC0000});

var sphere = new THREE.Mesh(

	new THREE.SphereGeometry(radius, segments, rings),

	sphereMaterial
);

scene.add(sphere);

/*Add point light!*/
var pointLight = new THREE.PointLight(0xFFFFFF);

pointLight.position.x = 10;
pointLight.position.y = 50;
pointLight.position.z = 130;

scene.add(pointLight);

renderer.render(scene, camera);

