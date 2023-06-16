import * as THREE from "three";

import {RGBELoader} from 'three/examples/jsm/loaders/RGBELoader.js';
import Experience from "../experience.js";
//import { RectAreaLightHelper } from 'three/addons/helpers/RectAreaLightHelper.js';


export default class Enviroment extends RGBELoader{
    constructor (){
        super();
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


        //this.rectAreaHelper = new RectAreaLightHelper(this.windowLight);
        //this.windowLight.add(this.rectAreaHelper);

        //this.directionalHelper = new DirectionalLightHelper(this.sunLight)
        //this.sunLight.add(this.directionalHelper);

        //this.pointHelp = new PointLightHelper(this.lampLight)
        //this.lampLight.add(this.pointHelp);

        const backgroundTexture = new THREE.TextureLoader().load('');
        this.scene.background = backgroundTexture; //this make the backround go aplha i dont know how but it works 

    }

        setAmbienLight(){
            this.ambienLinght = new THREE.AmbientLight(0xffffff, 0.01);
            this.scene.add(this.ambienLinght);
        }

    setSunlight(){
        this.sunLight = new THREE.DirectionalLight("#ffffff", 0.15);
        this.sunLight.position.set(-3, 2, -0.5);
        this.sunLight.castShadow = true;
        this.sunLight.shadow.camera.far = 5;
        this.sunLight.shadow.bias = 0.0018;
        this.sunLight.shadow.mapSize.set(6080,6080);
        this.scene.add(this.sunLight);
    }

    SetScreenLight(){
        this.screenLight = new THREE.RectAreaLight(
            0xFFFFFF,   //Color
            3,          //Intensity
            0.55,          //width
            0.32           //height
        )
        this.screenLight.position.set(-0.56, 0.9, 0.05);
        this.screenLight.rotation.set(0, -Math.PI/2, 0);
        this.scene.add(this.screenLight);
    }

    setLampLight(){        
        this.lampLookAt = new THREE.Object3D();
        this.lampLookAt.position.set(0.5, 0.7 , 0);
        this.scene.add(this.lampLookAt);

        this.lampLight = new THREE.SpotLight(
            0xFFFCCE,
            0.2, //Intensity
            5,
            Math.PI/4,
            0.8
        );
        this.lampLight.decay = 5;
        this.lampLight.position.set(-0.3, 0.89, 0.89);
        this.lampLight.castShadow = true;
        this.lampLight.shadow.mapSize.set(1400,1400);
        this.lampLight.shadow.bias = 0;

        this.lampLight.target = this.lampLookAt;

        this.scene.add(this.lampLight);


        this.lampLight2 = new THREE.PointLight(
            0xFFE598,   //Color
            1.5,       //intensity
            0.5,          //Distance
            3          //decay
        );
        this.lampLight2.position.set(-0.3, 0.89, 0.89);  

        this.scene.add(this.lampLight2);
    }

    SetLedsLight(){
        const LedsBright = 1;
        const LedsColor = 0xFF4848;

        this.LedsLight = new THREE.RectAreaLight(
            LedsColor,       //Color
            LedsBright,     //Intensity
            0.1,            //width
            2               //height
        )
        this.LedsLight.position.set(-0.78, 1, 1.2);
        this.LedsLight.rotation.set(0, -this.Degree45, 0);
        this.scene.add(this.LedsLight);

        this.LedsLight2 = new THREE.RectAreaLight(
            LedsColor,       //Color
            LedsBright,     //Intensity
            0.1,            //width
            2               //height
        )
        this.LedsLight2.position.set(-0.78, 2, 0.2);
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
        const Bright = 8;
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
