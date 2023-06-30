import EventEmitter from "events";

export default class Sizes extends EventEmitter{
    constructor(){
        super();
        const w = window.innerWidth;
        const h = window.innerHeight;
        
        this.width = w;
        this.height = h;
        this.aspect = this.width/this.height;
        this.pixelRatio = Math.min(window.devicePixelRatio, 2);
        
        window.addEventListener("resize", ()=>{
            this.width = w;
            this.height = h;
            this.aspect = this.width/this.height;
            this.pixelRatio = Math.min(window.devicePixelRatio, 2);
            this.emit("resize");
        })
    }
}

