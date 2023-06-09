import * as THREE from "three";
import Experience from "../experience.js";

export default class Enviroment{
    constructor (){
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
        
        //this.setSunlight();
        this.setLampLight();
        this.setAmbienLight();
    }

    setSunlight(){
        this.sunLight = new THREE.DirectionalLight("#ffffff", 3);
        this.sunLight.position.set(5, 7, 3);
        this.sunLight.castShadow = true;
        this.sunLight.shadow.camera.far = 20;
        this.sunLight.shadow.mapSize.set(1024,1024);
        this.sunLight.shadow.normalBias = 0.05;
        this.scene.add(this.sunLight);
    }

    setAmbienLight(){
        this.ambienLinght = new THREE.AmbientLight(0xffffff, 0.01);
        this.scene.add(this.ambienLinght)
    }

    setLampLight(){
        // this.example = new THREE.SphereGeometry(0.05,32,32);
        // this.materialBombilla = new THREE.MeshBasicMaterial({color: 0xffffff});
        // this.bombilla = new THREE.Mesh(this.example, this.materialBombilla);
        
        
        this.lampLight = new THREE.PointLight(0xFFE598, 0.1)
        this.lampLight.position.set(-0.3, 0.89, 0.89);  
        this.lampLight.castShadow = true;     
        this.scene.add(this.lampLight);
    }

    resize(){

    }

    update(){

    }
}
