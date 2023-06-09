import * as THREE from 'three';
import Experience from '../experience';


export default class Materials{
    constructor(){
        this.experience = new Experience();
        
        this.room = this.experience.world.room.actualRoom;
        this.CreateFloorMaterial();
        this.CreateGlassMaterial();
        this.CreateGlowingRedMaterial();
        this.CreateTableLegsMaterial();
        this.CreteGuitarMaterials();
        this.CreateWallMaterial();
        this.CreateMonitorMaterial();

        this.SetMaterials();
        
    }

    SetMaterials(){
        console.log(this.room);
        console.log(this.room.getObjectByName('Guitarra'));
        
        //Room
        this.room.getObjectByName('Piso').material = this.floorMaterial ;
        this.room.getObjectByName('Pared').material = this.floorMaterial;
        this.room.getObjectByName('Ventana').material = this.floorMaterial;
        this.room.getObjectByName('Leds').material = this.glowingRedMaterial;

        //furniture
        this.room.getObjectByName('Mesa').material = this.glassMaterial;
        this.room.getObjectByName('Patas').material = this.tableLegsMaterial;

        //PC
        this.room.getObjectByName('Ventiladores').material = this.glowingRedMaterial;
        this.room.getObjectByName('case').children[1].material = this.glowingRedMaterial;

        this.room.getObjectByName('Grafica').children[2].material = this.glowingRedMaterial;
        this.room.getObjectByName('Grafica').children[1].material = this.tableLegsMaterial;

        this.room.getObjectByName('TecladoDer').children[3].material = this.glowingRedMaterial;

        this.room.getObjectByName('TecladoIzq').children[3].material = this.glowingRedMaterial;



        
        //Decoration
        this.room.getObjectByName('Guitarra').children[0].material = this.blackGuitarMaterial;
        this.room.getObjectByName('Guitarra').children[1].material = this.ropeWhiteMaterial;
        this.room.getObjectByName('Guitarra').children[2].material = this.ropeWhiteMaterial;
        this.room.getObjectByName('Guitarra').children[3].material = this.ropeWhiteMaterial;

        this.room.getObjectByName('Maceta').material = this.floorMaterial;
        
    }

    CreateMonitorMaterial(){
        this.ScreenMaterial = new THREE.MeshBasicMaterial({
            color: 0x000000
          });
    }

    CreateGlassMaterial(){
        this.glassMaterial = new THREE.MeshPhysicalMaterial(1,1,1);
        this.glassMaterial.transmission = 1;
        this.glassMaterial.roughness = 0.0;
        this.glassMaterial.ior = 1.5;
        this.glassMaterial.thickness= 0;
        this.glassMaterial.specularIntensity = 1;
        this.glassMaterial.clearcoat = 1;
    }

    CreateFloorMaterial(){
        //this.textureLoader = new THREE.TextureLoader();
        //this.floorTexture = this.textureLoader.load('/Experience/public/Textures/Loseta.JPG');
        //this.floorTexture.wrapS = THREE.ClampToEdgeWrapping;
        //this.floorTexture.wrapT = THREE.ClampToEdgeWrapping;
        //this.floorTexture.repeat.set(0.1,0.1);

        this.floorMaterial = new THREE.MeshStandardMaterial({
            //map: this.floorTexture,       // Textura de la loseta
            roughness: 0.8,     // Rugosidad del material (ajústalo según tus necesidades)
            metalness: 0.2,     // Metalicidad del material (ajústalo según tus necesidades)
        });       
          
    }

    CreateWallMaterial(){

    }

    CreateMetalMsterial(){

    }

    CreateGlowingRedMaterial(){
        this.glowingRedMaterial = new THREE.MeshBasicMaterial({
            color: 0xff0000, 
            emissive: 0xff0000,
            emissiveIntensity: 2
          });
    }

    CreateTableLegsMaterial(){
        this.tableLegsMaterial = new THREE.MeshStandardMaterial({
            color: 0x707070, // Color plateado
            metalness: 0, // Nivel de metalidad (1 es completamente metálico)
            roughness: 0 // Rugosidad (valores más bajos dan un aspecto más suave)
        });
    }

    CreteGuitarMaterials(){
        this.blackGuitarMaterial = new THREE.MeshPhysicalMaterial({
            color: 0x000000,      // Color negro
            roughness: 0.0,       // Rugosidad (puede ajustarse según el nivel de brillo deseado)
            metalness: 0,       // Metalicidad (puede ajustarse según el nivel de brillo deseado)
        });
        this.blackGuitarMaterial.clearcoat = 1;
        

        this.ropeWhiteMaterial = new THREE.MeshStandardMaterial({
            color: 0xffffff, // Color blanco
            roughness: 0.5, // Rugosidad media
            metalness: 0.0, // Sin apariencia metálica
        });
        
        this.ropeGoldMaterial = new THREE.MeshStandardMaterial({
            color: 0x7B5E19, // Color bronce
            roughness: 0.4, // Rugosidad moderada
        });
    }

    
}