var advo=document.querySelector("#advo")
var clint=document.querySelector("#clint")
var adv=document.querySelector("#adv")
var cli=document.querySelector("#cli")
var law1=document.querySelector("#law1")
var law2=document.querySelector("#law2")
var law3=document.querySelector("#law3")
var law4=document.querySelector("#law4")
var law5=document.querySelector("#law5")
var law6=document.querySelector("#law6")

adv.addEventListener("click",function(){
    gsap.to("#adv", {
        y:10,
    });
})
cli.addEventListener("click",function(){
    gsap.to("#cli", {
        y:10,
    });
})

gsap.from("#advo", {
    x: -200,
    duration:2,
    opacity:0,
});
gsap.from("#clint", {
    x: 200,
    duration:2,
    opacity:0
});


// -----------------==============================hjjjjjjjjjjjjjjjj
var tl1=gsap.timeline({repeat:-1, yoyo:true});

tl1.to("#law1", {
    x:30,
    y:30,
    rotation:8,
    duration:5,
});
tl1.to("#law1", {
    x:30,
    y:-30,
    rotation:8,
    duration:5,
    ease:"power1.inOut"
});
tl1.to("#law1", {
    x:70,
    y:50,
    rotation:10,
    duration:5,
    delay:1,
});
gsap.from("#law1", {
    opacity:0,
    duration:2,
    delay:1.5
});
gsap.from("#law2", {
    opacity:0,
    duration:3,
    delay:1.5
});
gsap.to("#law2", {
    x:15,
    y:30,
    delay:1,

    rotation:5,
    duration:6,
    repeat:-1,
    yoyo:true,
    ease:"power3.inOut",
});
gsap.from("#law3", {
    opacity:0,
    duration:3,
    delay:1.5
});
gsap.to("#law3", {
    x:15,
    y:30,
    rotation:5,
    duration:6,
    repeat:-1,
    yoyo:true,
    ease:"power3.inOut",
    delay:1,

});
gsap.from("#law4", {
    opacity:0,
    duration:3,
    delay:1.5
});
gsap.from("#law4", {
    x:45,
    y:30,
    rotation:5,
    duration:6,
    repeat:-1,
    yoyo:true,
    ease:"power3.inOut",
    delay:1,

});
gsap.from("#law5", {
    opacity:0,
    duration:3,
    delay:1.5
});
gsap.to("#law5", {
    x:70,
    y:50,
    rotation:10,
    duration:5,
    repeat:-1,
    yoyo:true,
    ease:"power3.inOut",
    delay:1,

});
gsap.from("#law6", {
    opacity:0,
    duration:3,
    delay:1.5
});
gsap.to("#law6", {
    x:-70,
    y:50,
    rotation:10,
    duration:7,
    repeat:-1,
    yoyo:true,
    ease:"power3.inOut",
    delay:1,

});


// ------------------------------------kokooooooooooo


function breaktext() {
    var h1 = document.querySelector("h1");
    var h1text = h1.textContent;
    var splittedtext = h1text.split("")
    var nom= Math.floor(splittedtext.length/2);

    var cot=""


    console.log(nom);

    splittedtext.forEach( function(Elm,inx) {
       if(inx<nom){
        cot+=`<span class="a">${Elm}</span>`}
        else{
            cot+=`<span class="b">${Elm}</span>`
        }
    })
    h1.innerHTML=cot
}
breaktext()



gsap.from(" .a", {
    y:90,
    opacity:0,
    duration :0.9,
    delay:1,
    stagger: 0.17, 
    
});

gsap.from(" .b", {
    y:90,
    opacity:0,
    duration :0.9,
    delay:1,
    stagger: -0.17, 
   
});