import * as THREE from 'three';

import Sizes from './Utils/sizes.js';
import Time from './Utils/time.js';
import Resources from './Utils/resources.js';
import assets from './Utils/assets.js';
import Materials from './Utils/materials.js';

import Camera from './camera.js';
import Renderer from './renderer.js';

import World from './World/world.js';

export default class Experience{
    static instance;
    constructor(canvas){
        if (Experience.instance){
            return Experience.instance;
        }
        Experience.instance = this;
        this.canvas = canvas;
        this.scene = new THREE.Scene();

        this.time = new Time();
        this.sizes = new Sizes();
        this.camera = new Camera();
        this.renderer = new Renderer();
        this.resources = new Resources(assets);
        this.world = new World();
        
        this.world.on("room-added", ()=>{
            this.materials = new Materials();
        });


        this.sizes.on("resize", ()=>{
            this.resize();
        })
        this.time.on("update", () => {
            this.update();
        })
    }

    

    resize(){
        this.camera.resize();
        this.renderer.resize();
    }

    update(){
        this.camera.update();
        this.renderer.update();
    }
}