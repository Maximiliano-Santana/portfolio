import EventEmitter from "events";

export default class Time extends EventEmitter{
    constructor(){
        super();
        this.start = Date.now(); //Time when we start experience
        this.current = this.start; 
        this.elapsed = 0;       //Time elapsed sinse we start the experience
        this.delta = 16;        //Time between frames in ms (60fps)
        this.update();
    }
    
    update(){
        const currentTime = Date.now();
        this.delta = currentTime - this.current;
        this.current = currentTime;
        this.elapsed = this.current - this.start;
        //console.log(1000/this.delta); fps


        this.emit("update");
        window.requestAnimationFrame(()=>this.update());
        
    }
}
