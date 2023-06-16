import * as THREE from 'three';
import Experience from '../experience';



export default class Materials{
    constructor(){
        this.experience = new Experience();
        this.room = this.experience.world.room.actualRoom;
        this.enviroment = this.experience.enviroment;

        this.CreateWallMaterial();
        this.CreateFloorMaterial();
        this.CreateTableLegsMaterial();

        this.CreateGlassMaterial();
        this.CreateGlowingRedMaterial();
        
        this.CreteGuitarMaterials();
        this.CreateMonitorMaterial();
        this.CreateMetalMaterial();
        this.CreateCaseMaterial();
        this.CreateChairMaterial();

        this.CreateMousepadMaterial();
        this.CreatePaintMaterial();

        this.SetMaterials();
        
    }

    SetMaterials(){
        //Room
        this.room.getObjectByName('Piso').material = this.floorMaterial ;
        this.room.getObjectByName('Pared').material = this.wallMaterial;

        this.room.getObjectByName('Ventana').material = this.ropeWhiteMaterial;
        
        this.room.getObjectByName('Leds').material = this.glowingRedMaterial;

        //furniture
        this.room.getObjectByName('Mesa').material = this.glassMaterial;

        this.room.getObjectByName('Patas').material = this.tableLegsMaterial;

        
        this.room.getObjectByName('Silla').children[1].material = this.chairMaterial;
        this.room.getObjectByName('Silla').children[0].material = this.caseMaterial;

        //PC
        this.room.getObjectByName('Ventiladores').material = this.glowingRedMaterial;
        
        this.room.getObjectByName('case').children[0].material = this.caseMaterial;
        this.room.getObjectByName('case').children[1].material = this.glowingRedMaterial;
        
        
        this.room.getObjectByName('Grafica').children[2].material = this.glowingRedMaterial;
        this.room.getObjectByName('Grafica').children[1].material = this.metalMaterial;
        
        this.room.getObjectByName('TecladoDer').children[3].material = this.glowingRedMaterial;
        this.room.getObjectByName('TecladoIzq').children[3].material = this.glowingRedMaterial;

        this.room.getObjectByName('Mouse').material = this.wallMaterial;
        
        this.room.getObjectByName('Monitor').children[0].material = this.caseMaterial;
        //Decoration
        this.room.getObjectByName('Guitarra').children[0].material = this.blackGuitarMaterial;
        this.room.getObjectByName('Guitarra').children[1].material = this.ropeWhiteMaterial;
        this.room.getObjectByName('Guitarra').children[2].material = this.ropeWhiteMaterial;
        this.room.getObjectByName('Guitarra').children[3].material = this.ropeWhiteMaterial;

        this.room.getObjectByName('Maceta').material = this.floorMaterial;

        this.room.getObjectByName('Cortinas').material = this.chairMaterial;

        this.room.getObjectByName('Cuadro').material = this.paintMaterial;
        this.room.getObjectByName('Mousepad').material = this.mosuepadMaterial;

        this.room.getObjectByName('EstanteExagonal').material = this.caseMaterial;

        this.room.getObjectByName('Microfono').material = this.caseMaterial;
        this.room.getObjectByName('Lampara').material = this.caseMaterial;
        
    }



    CreateMetalMaterial(){
        this.metalMaterial = new THREE.MeshPhysicalMaterial({
            color: 0xFFFFFF,      // Color negro
            roughness: 0,       // Rugosidad (puede ajustarse según el nivel de brillo deseado)
            metalness: 0.9,       // Metalicidad (puede ajustarse según el nivel de brillo deseado)
        });
        this.metalMaterial.clearcoat = 0;
    
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
        this.glassMaterial.transparent = true;
    }

    CreateWallMaterial(){
        const normalMapTexture = new THREE.TextureLoader().load('/Experience/public/Textures/bumpWall.jpg');
        
        this.wallMaterial = new THREE.MeshStandardMaterial({
            roughness: 0.5,     // Rugosidad del material (ajústalo según tus necesidades)
            metalness: 0.0,     // Metalicidad del material (ajústalo según tus necesidades)
        });  

        normalMapTexture.wrapS = THREE.RepeatWrapping;
        normalMapTexture.wrapT = THREE.RepeatWrapping;
        normalMapTexture.repeat.set(8,10);
        this.wallMaterial.bumpMap = normalMapTexture;
        this.wallMaterial.bumpScale = 0.01;
    }

    CreateFloorMaterial(){
        const normalMapTexture = new THREE.TextureLoader().load('/Experience/public/Textures/Loseta.jpg');
        
        this.floorMaterial = new THREE.MeshStandardMaterial({
            map: normalMapTexture,
            color: 0xffffff,
            roughness: 0.15,     // Rugosidad del material (ajústalo según tus necesidades)
            metalness: 0.0,     // Metalicidad del material (ajústalo según tus necesidades)
        });  

        normalMapTexture.wrapS = THREE.RepeatWrapping;
        normalMapTexture.wrapT = THREE.RepeatWrapping;
        normalMapTexture.repeat.set(1,1);
        this.floorMaterial.bumpMap = normalMapTexture;
        this.floorMaterial.bumpScale = -0.015;
    }

    CreateGlowingRedMaterial(){
        this.glowingRedMaterial = new THREE.MeshStandardMaterial({
            color: 0xFF2828, 
            emissive: 0xFF2828,
            emissiveIntensity: 1,
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
        this.blackGuitarMaterial = new THREE.MeshStandardMaterial({
            color: 0x000000,      // Color negro
            roughness: 0.0,       // Rugosidad (puede ajustarse según el nivel de brillo deseado)
            metalness: 0,       // Metalicidad (puede ajustarse según el nivel de brillo deseado)
        });
        
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

    CreateCaseMaterial(){
        this.caseMaterial = new THREE.MeshStandardMaterial({
            color: 0x262623,
            roughness:0.5,
        })
    }

    CreateChairMaterial(){
        const normalMapTexture = new THREE.TextureLoader().load('/Experience/public/Textures/bumpCloth.jpg');
        
        this.chairMaterial = new THREE.MeshStandardMaterial({
            color: 0x43433F,
            roughness:1,
        })

        normalMapTexture.wrapS = THREE.RepeatWrapping;
        normalMapTexture.wrapT = THREE.RepeatWrapping;
        normalMapTexture.repeat.set(2,2);
        this.chairMaterial.bumpMap = normalMapTexture;
        this.chairMaterial.bumpScale = 0.005;
    }

    CreatePaintMaterial(){
        const texture = new THREE.TextureLoader().load('/Experience/public/Textures/Cuadro.jpeg');
        
        this.paintMaterial = new THREE.MeshStandardMaterial({
            map: texture,
            roughness: 0.5,     // Rugosidad del material (ajústalo según tus necesidades)
            metalness: 0.0,     // Metalicidad del material (ajústalo según tus necesidades)
        });  

        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        
        
    }

    CreateMousepadMaterial(){
        const texture = new THREE.TextureLoader().load('/Experience/public/Textures/mousepad.jpeg');
        
        this.mosuepadMaterial = new THREE.MeshStandardMaterial({
            map: texture,
            roughness: 0.5,     // Rugosidad del material (ajústalo según tus necesidades)
            metalness: 0.0,     // Metalicidad del material (ajústalo según tus necesidades)
        });  

        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        
    }
    
}