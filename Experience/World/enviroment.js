import * as THREE from "three";
import Experience from "../experience.js";
import { PointLightHelper } from "three";

export default class Enviroment{
    constructor (){
        this.Degree45 = 0.785398;
        this.Degree90 = 1.5708;
        this.Degree180 = 3.14159;

        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
        
        this.setSunlight();
        this.setLampLight();
        this.setAmbienLight();
        this.SetScreenLight();
        this.SetLedsLight();
        this.SetPcLights();

        //this.rectAreaHelper = new RectAreaLightHelper(this.FansLight2);
        //this.FansLight2.add(this.rectAreaHelper);

        //this.directionalHelper = new DirectionalLightHelper(this.sunLight)
        //this.sunLight.add(this.directionalHelper);

        //this.pointHelp = new PointLightHelper(this.lampLight)
        //this.lampLight.add(this.pointHelp);
    }

    setSunlight(){
        this.sunLight = new THREE.DirectionalLight("#ffffff", 0.15);
        this.sunLight.position.set(-5, 3, -1);
        this.sunLight.castShadow = true;
        this.sunLight.shadow.camera.far = 20;
        this.sunLight.shadow.mapSize.set(1040,1040);
        this.sunLight.shadow.normalBias = 0.05;
        this.scene.add(this.sunLight);
    }

    setAmbienLight(){
        this.ambienLinght = new THREE.AmbientLight(0xffffff, 0.01);
        this.scene.add(this.ambienLinght);
    }

    SetScreenLight(){
        this.screenLight = new THREE.RectAreaLight(
            0xFFFFFF,   //Color
            1,          //Intensity
            0.5,          //width
            0.3           //height
        )
        this.screenLight.position.set(-0.52, 0.9, 0.1);
        this.screenLight.rotation.set(0, -Math.PI/2, 0);
        this.scene.add(this.screenLight);
    }

    setLampLight(){
        // this.example = new THREE.SphereGeometry(0.05,32,32);
        // this.materialBombilla = new THREE.MeshBasicMaterial({color: 0xffffff});
        // this.bombilla = new THREE.Mesh(this.example, this.materialBombilla);
        
        
        this.lampLight = new THREE.PointLight(
            0xFFE598,   //Color
            0.5,       //intensity
            3,          //Distance
            4           //decay
        );
        this.lampLight.position.set(-0.3, 0.89, 0.89);  
        this.lampLight.castShadow = true; 
        this.lampLight.shadow.mapSize.set(1024,1024);
    
        this.scene.add(this.lampLight);
    }

    SetLedsLight(){
        const LedsBright = 3;
        const LedsColor = 0xFF0000

        this.LedsLight = new THREE.RectAreaLight(
            LedsColor,       //Color
            LedsBright,     //Intensity
            0.1,            //width
            2               //height
        )
        this.LedsLight.position.set(-0.75, 1, 1.2);
        this.LedsLight.rotation.set(0, -this.Degree45, 0);
        this.scene.add(this.LedsLight);

        this.LedsLight2 = new THREE.RectAreaLight(
            LedsColor,       //Color
            LedsBright,     //Intensity
            0.1,            //width
            2               //height
        )
        this.LedsLight2.position.set(-0.75, 2, 0.2);
        this.LedsLight2.rotation.set(this.Degree90, this.Degree180 + this.Degree45, 0);
        this.scene.add(this.LedsLight2);

        this.LedsLight3 = new THREE.RectAreaLight(
            LedsColor,       //Color
            LedsBright,     //Intensity
            0.1,            //width
            2               //height
        )
        this.LedsLight3.position.set(0.24, 2, -0.8);
        this.LedsLight3.rotation.set(this.Degree180 + this.Degree45, 0, this.Degree90);
        this.scene.add(this.LedsLight3);
    }

    SetPcLights(){
        const Bright = 3;
        const Color = 0xFF0000

        this.FrontFansLight = new THREE.RectAreaLight(
            Color,       //Color
            Bright,     //Intensity
            0.12,            //width
            0.35                //height
        )
        this.FrontFansLight.position.set(-0.17, 0.87, -0.40);
        this.FrontFansLight.rotation.set(0 , -this.Degree90, 0);
        this.scene.add(this.FrontFansLight);

        this.FansLight1 = new THREE.RectAreaLight(
            Color,       //Color
            Bright,     //Intensity
            0.12,            //width
            0.12                //height
        )
        this.FansLight1.position.set(-0.38, 0.98, -0.40);
        this.FansLight1.rotation.set(0 , -this.Degree90, 0);
        this.scene.add(this.FansLight1);

        this.FansLight2 = new THREE.RectAreaLight(
            Color,       //Color
            Bright,     //Intensity
            0.12,            //width
            0.12                //height
        )
        this.FansLight2.position.set(-0.5, 0.98, -0.40);
        this.FansLight2.rotation.set(0 , -this.Degree90 + this.Degree180, 0);
        this.scene.add(this.FansLight2);


    }
    resize(){

    }

    update(){

    }
}
