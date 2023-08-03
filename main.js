import './sass/style.scss'
import Experience from './Experience/experience.js';

const experience = new Experience(document.querySelector('.experience__canvas')); //Pass the canvas to the Singleton design


const navbarItems = document.querySelectorAll('.navbar__item');
const navbarDot = document.querySelector('.navbar__dot');

const scroll = document.querySelector('.scroll');





var itemsHeight = navbarItems[navbarItems.length-1].offsetTop - navbarItems[0].offsetTop;
var sectionHeight = parseInt(scroll.scrollHeight/scroll.childElementCount);
var scrollPosition = parseInt(scroll.scrollTop);
var sectionPosition = 0;



scroll.addEventListener('scroll', ()=>{
    scrollPosition = parseInt(scroll.scrollTop);
    MoveDot(((scrollPosition/(scroll.scrollHeight-sectionHeight))*itemsHeight)+navbarItems[0].offsetTop);


    setTimeout(()=>{
        navbarDot.classList.add('animateDotMove');
    }, 0)
    setTimeout(()=>{
        navbarDot.classList.remove('animateDotMove');
    }, 500)

    switch(scrollPosition){
        case 0: 
            console.log('estas en pag 1');
            sectionPosition = 0;
            AnimateItem(sectionPosition);
            MoveDot();            
            break;
            case sectionHeight: 
            console.log('estas en pag 2');
            sectionPosition = 1;
            AnimateItem(sectionPosition);
            MoveDot();
            break;
            case sectionHeight*2: 
            console.log('estas en pag 3');
            sectionPosition = 2;
            AnimateItem(sectionPosition);
            MoveDot();
            break;
            case sectionHeight*3: 
            console.log('estas en pag 4');
            sectionPosition = 3;
            AnimateItem(sectionPosition);
            MoveDot();
            break;
            case sectionHeight*4: 
            console.log('estas en pag 5');
            sectionPosition = 4;
            AnimateItem(sectionPosition);
            MoveDot();
        break;
    }
})


function AnimateItemsF1(){
    // navbarItems.forEach(function(item){
    //     const itemW = item.querySelector('.itemWhite');
    //     const itemR = item.querySelector('.itemRed');
    
    //     item.addEventListener('click', ()=>{
    //         itemW.classList.add('animateDiscoverUp');
    //         itemR.style.display = 'block';
    //         setTimeout(()=>{
    //             itemW.classList.remove('animateDiscoverUp');
    //             itemW.style.display = 'none';
    //         }, 300)
    //     })
    // })
    }

function AnimateItem(section){
    const itemW = navbarItems[section].querySelector('.itemWhite');
    const itemR = navbarItems[section].querySelector('.itemRed');

    itemW.classList.add('animateDiscoverUp');
    
}

function MoveDot(dotPosition){
    navbarDot.style.top = String(dotPosition)+'px';
}

window.addEventListener('resize', ()=>{
    itemsHeight = navbarItems[navbarItems.length-1].offsetTop - navbarItems[0].offsetTop;
    sectionHeight = parseInt(scroll.scrollHeight/scroll.childElementCount);
    scrollPosition = parseInt(scroll.scrollTop);
})




// window.addEventListener ('resize', function(){
//     sectionHeight = scroll.scrollHeight/scroll.childElementCount

//     dotPosition = navbarItems[0].offsetTop +(navbarItems[0].style.width/2);
//     navbarDot.style.top = String(dotPosition) + 'px';
// })

// var scrollPosition = 0; 
// dotPosition = navbarItems[scrollPosition].offsetTop +(navbarItems[0].style.width/2);
// navbarDot.style.top = String(dotPosition) + 'px';



// scroll.addEventListener('scroll', function(){
//     const scrollTop = scroll.scrollTop;

//     dotPosition = navbarItems[scrollPosition].offsetTop +(navbarItems[0].style.width/2);

//     //dotPosition = scrollTop/scroll.scrollHeight*sectionHeight;
//     setTimeout(()=>{

//         navbarDot.classList.add('animateDotMove');
//     })
//     setTimeout(()=>{
//         navbarDot.classList.remove('animateDotMove');
//     }, 1000)

// });



// navbarDot.addEventListener('ckick', ()=>{
//     console.log('hola');
//     navbarDot.classList.add('navbar__dot--active');
//     setTimeout(()=>{
//         navbarDot.classList.remove('navbar__dot--active');
        
//     }, 500);

// })


