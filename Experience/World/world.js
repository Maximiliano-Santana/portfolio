
import Experience from "../experience.js";
import Enviroment from "./enviroment.js";


import Room from "./room.js";

import EventEmitter from "events";

export default class World extends EventEmitter{
    constructor (){
        super();
        this.experience = new Experience();
        this.sizes = this.experience.sizes;
        this.scene = this.experience.scene;
        this.canvas = this.experience.canvas;
        this.camera = this.experience.camera;
        this.resources = this.experience.resources;

        this.resources.on('ready', ()=>{
            this.room = new Room();
            this.enviroment = new Enviroment();
            this.emit('room-added');
        });
    }


    resize(){}

    update(){}
}
