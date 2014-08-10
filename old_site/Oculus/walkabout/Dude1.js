
var md2frames = {
	// first, last, fps
	stand   : [   0,  39,  9, {state : 'stand',  action : false} ],   // STAND
	run     : [  40,  45, 10, {state : 'stand',  action : false} ],   // RUN
	attack  : [  46,  53, 10, {state : 'stand',  action : true}  ],   // ATTACK
	pain1   : [  54,  57,  7, {state : 'stand',  action : true}  ],   // PAIN_A
	pain2   : [  58,  61,  7, {state : 'stand',  action : true}  ],   // PAIN_B
	pain3   : [  62,  65,  7, {state : 'stand',  action : true}  ],   // PAIN_C
	jump    : [  66,  71,  7, {state : 'stand',  action : true}  ],   // JUMP
	flip    : [  72,  83,  7, {state : 'stand',  action : true}  ],   // FLIP
	salute  : [  84,  94,  7, {state : 'stand',  action : true}  ],   // SALUTE
	taunt   : [  95, 111, 10, {state : 'stand',  action : true}  ],   // FALLBACK
	wave    : [ 112, 122,  7, {state : 'stand',  action : true}  ],   // WAVE
	point   : [ 123, 134,  6, {state : 'stand',  action : true}  ],   // POINT
	crstand : [ 135, 153, 10, {state : 'crstand', action : false}],   // CROUCH_STAND
	crwalk  : [ 154, 159,  7, {state : 'crstand', action : false}],   // CROUCH_WALK
	crattack: [ 160, 168, 10, {state : 'crstand', action : true} ],   // CROUCH_ATTACK
	crpain  : [ 196, 172,  7, {state : 'crstand', action : true} ],   // CROUCH_PAIN
	crdeath : [ 173, 177,  5, {state : 'freeze', action : true} ],   // CROUCH_DEATH
	death1  : [ 178, 183,  7, {state : 'freeze',  action : true}  ],   // DEATH_FALLBACK
	death2  : [ 184, 189,  7, {state : 'freeze',  action : true}  ],   // DEATH_FALLFORWARD
	death3  : [ 190, 197,  7, {state : 'freeze',  action : true}  ],   // DEATH_FALLBACKSLOW
	//boom    : [ 198, 198,  5 ]    // BOOM
}

Dude = function (name, geometry, material) {

	this.object = new THREE.MorphAnimMesh( geometry, material );

	this.object.rotation.y = -Math.PI / 2;
	this.object.scale.set(.02, .02, .02);
	this.object.position.y = .5;
	this.object.castShadow = true;
	this.object.receiveShadow = true;

	//var geom = new THREE.TextGeometry(name, { font: "helvetiker" });

	//var mat  = new THREE.MeshPhongMaterial({color: 0x00ff00});
	//this.sign = new THREE.Mesh(geom, mat);
	//this.sign.position.y = this.object.position.y+1;

	this.motion  = 'stand';
	this.state   = 'stand';
	this.direction = 0;
	this.name = name;


	this.changeMotion = function (motion) {
		this.motion = motion;
		this.state = md2frames[motion][3].state;
		var animMin = md2frames[motion][0];
		var animMax = md2frames[motion][1];
		var animFps = md2frames[motion][2];
		this.object.time = 0;
		this.object.duration = 1000 * (( animMax - animMin ) / animFps);
		this.object.setFrameRange( animMin, animMax );
	}

	this.changeMotion('stand');

	this.animate = function (clockdelta) {
		var isEndFrame = (md2frames[this.motion][1] === this.object.currentKeyframe);
		var isAction = md2frames[this.motion][3].action;
		
		if(!isAction || (isAction && !isEndFrame)){
			this.object.updateAnimation(1000 * clockdelta);
		}else if(/freeze/.test(md2frames[this.motion][3].state)){
			//dead...
		}else{
			this.changeMotion(this.state);
		}

	}

	this.setPosition = function (x, z, terrain, direction) {
		if (direction) {
			this.diretion = direction;
			this.object.rotation.y = (direction+270) * Math.PI / 180;
		}
		this.object.position.x = x;
		this.object.position.z = z;

		var vec = new THREE.Vector3( 0, -1, 0 );
		var pos = new THREE.Vector3(this.object.position.x, this.object.position.y+100, this.object.position.z);
		var raycaster = new THREE.Raycaster(pos, vec);
		var intersects = raycaster.intersectObject(terrain);
		if (intersects.length>0) this.object.position.y = intersects[0].point.y+.5;
	}

	this.setState = function (state) {
		this.object.position.x = state.x;
		this.object.position.y = state.y;
		this.object.position.z = state.z;
		this.object.rotation.y = (state.dir+270) * Math.PI / 180;
		this.direction = state.dir;
		if (state.mot != this.motion) this.changeMotion(state.mot);
	}

	this.getState = function () {
		var state = {
			action: 'broadcast',
			name: this.name,
			x   : this.object.position.x,
			y   : this.object.position.y,
			z   : this.object.position.z,
			dir : this.direction,
			mot : this.motion
		}
		return state;
	}

	this.getStateRounded = function () {
		var state = {
			action: 'broadcast',
			name: this.name,
			x   : Math.round(this.object.position.x * 100)/100,
			y   : Math.round(this.object.position.y * 100)/100,
			z   : Math.round(this.object.position.z * 100)/100,
			dir : Math.round(this.direction * 100)/100,
			mot : this.motion
		}
		return state;
	}


};




