import * as THREE from "three";

import Experience from "./experience.js";

import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import {RenderPass} from 'three/examples/jsm/postprocessing/RenderPass.js';
import {UnrealBloomPass} from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';




export default class Renderer{
    constructor (){
        this.experience = new Experience();
        this.sizes = this.experience.sizes;
        this.scene = this.experience.scene;
        this.canvas = this.experience.canvas;
        this.camera = this.experience.camera;
        
        this.setRenderer();
        this.SetBloomEffect();

    }

    setRenderer(){
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas,
            antialias: true,
            alpha: true
        });
        this.renderer.useLegacyLights = true;
        this.renderer.toneMapping = THREE.CineonToneMapping;
        this.renderer.toneMappingExposure = 1.75;
        this.renderer.castShadow = true;
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        this.renderer.setSize(this.sizes.width, this.sizes.height);
        this.renderer.setPixelRatio(this.sizes.pixelRatio);

    }

    SetBloomEffect(){
        this.rendereScene = new RenderPass(this.scene, this.camera.perspectiveCamera);
        this.bloomPass = new UnrealBloomPass(
            {innerWidth, innerHeight},
            1, 
            0.4, 
            0.85 
        );
        this.bloomPass.threshold = 0.2;
        this.bloomPass.strenght = 2;
        this.bloomPass.radius = 0.1;

        this.bloomComposer = new EffectComposer(this.renderer);
        this.bloomComposer.setSize(this.sizes.width, this.sizes.height);
        this.bloomComposer.renderToScreen = true;
        this.bloomComposer.addPass(this.rendereScene);
        this.bloomComposer.addPass(this.bloomPass);
        this.bloomComposer.alpha = true;

    }

    resize(){
        this.renderer.setSize(this.sizes.width, this.sizes.height);
        this.renderer.setPixelRatio(this.sizes.pixelRatio);
    }

    update(){
        this.renderer.render(this.scene, this.camera.perspectiveCamera);
    }
}
