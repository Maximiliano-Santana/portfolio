import * as THREE from "three";
import Experience from "./experience.js";
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

export default class Camera{
    constructor (){
        this.experience = new Experience();
        this.sizes = this.experience.sizes;
        this.scene = this.experience.scene;
        this.canvas = this.experience.canvas;

        this.createPerspectiveCamera();
        //this.crateOrthographicCamera();
        //this.setOrbitControls();
    }

    createPerspectiveCamera(){
        this.perspectiveCamera = new THREE.PerspectiveCamera(
            35, 
            this.sizes.aspect, 
            0.1, 
            1000
        );
        this.scene.add(this.perspectiveCamera);
        this.perspectiveCamera.position.set(5, 1.5, 2);
        this.perspectiveCamera.lookAt(0,0.75,0)

    }

    crateOrthographicCamera(){
        this.frustrum = 5;
        this.orthographicCamera = new THREE.OrthographicCamera(
            (-this.sizes.aspect * this.sizes.frustrum)/2,   //left 
            (this.sizes.aspect * this.sizes.frustrum)/2,    //right
            this.sizes.frustrum/2,                          //top
            -this.sizes.frustrum/2,                         //bottom
            -100,                                           //near
            100                                             //far
        );
        this.scene.add(this.orthographicCamera);
        this.orthographicCamera.position.z = 5;
    }

    setOrbitControls(){
        this.controls = new OrbitControls(this.perspectiveCamera, this.canvas);
        this.controls.enableDamping = false;
        this.controls.enableZoom = true;
    }
  
    resize(){
        //Updating Perspective Camera 
        this.perspectiveCamera.aspect = this.sizes.aspect;
        this.perspectiveCamera.updateProjectionMatrix();

        //Updating Orthographic Camera
        this.orthographicCamera.left = (-this.sizes.aspect * this.sizes.frustrum)/2;
        this.orthographicCamera.right = (this.sizes.aspect * this.sizes.frustrum)/2;
        this.orthographicCamera.top = this.sizes.frustrum/2;
        this.orthographicCamera.bottom = -this.sizes.frustrum/2;
        this.orthographicCamera.updateProjectionMatrix();
    }

    update(){

    }
}
