
var myNav = document.getElementById('mynav');
var gback= document.getElementById('g-back');

// var gback2= document.getElementsByClassName('g-back');
//array  of languages
const lang=["Hello!","नमस्ते!","নমস্কার!","こんにちは!","Bonjour!","Привет!","¡Hola!","Salve!","Ciao!"];

// change id='txt' text to "hi", "bye", "hs", "goodbye" after 1 second
let txt=document.getElementById('txt');

// change id='txt' text to "hi", "bye", "hs", "goodbye" after 1 second
let index=0;
function anim(){


txt.innerHTML=lang[index];
txt.classList.add("c-lang");
// animatetext(lang[index]);
if(index==lang.length-1){
  index=0;
}
else{
  index++;
}
setInterval(function(){
  txt.classList.remove("c-lang");},2000);
setTimeout(anim,4000);
}
window.onload = anim;

  let index1=0;
  function animatetext(value){
  "use strict";
  let txt1=document.getElementById('txt');
  let i=0;
  let speed=100;
  let text=value;
  let index1=0;
  let timer=setInterval(function(){
    if(i<text.length){
      txt1.innerHTML+=text.charAt(i);
      i++;
    }
    else{
      clearInterval(timer);
    }
  },speed);
}

var targ=document.querySelectorAll('section:nth-child(even)');
var len=targ.length;
for(var i=0;i<len;i++){
  //targ[i].style.backgroundColor="white";
  targ[i].classList.add("alt-color");
}

var d=document.querySelectorAll('.ds');
var h=document.querySelectorAll('.hd');
var p=document.querySelectorAll('.para');

for(let i=0;i<d.length;i++){

d[i].addEventListener("mouseover", function( event ){
  h[i].classList.add("hd1");
    
   p[i].classList.add("para1");
  // setTimeout(function(){
  //   p[i].classList.add("para1");
  //   },50);
  
});
d[i].addEventListener("mouseout", function( event ){
  p[i].classList.remove("para1");
  
  h[i].classList.remove("hd1");
  // setTimeout(function(){
  // h[i].classList.remove("hd1")
  // },50);
});
}






window.onscroll = function () { 
"use strict";
if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200 ) {
  myNav.classList.add("nav-color");
   gback.classList.add("gold-back-reavel-in");
   gback.classList.remove("gold-back");
  
    const target = document.querySelectorAll('.gold-back-reavel-in');
    var index = 0, length = target.length;
    for (index; index < length; index++) {
        var pos = window.pageYOffset * -0.05 +10;

        if(target[index].dataset.direction === 'vertical') {
            target[index].style.transform = 'translate3d(0px,'+pos+'px, 0px)';
        } else {
            var posX = window.pageYOffset * target[index].dataset.ratex;
            var posY = window.pageYOffset * target[index].dataset.ratey;
            
            target[index].style.transform = 'translate3d('+posX+'px, '+posY+'px, 0px)';
        }
    }
   



  // let animation= anime({
  //   targets: '.divs .div-anime',
  //   translateX: function(el) {
  //     return el.getAttribute('data-x');
  //   },
  //   translateY: function(el, i) {
  //     return 50 + (-50 * i);
  //   },
  //   scale: function(el, i, l) {
  //     return (l - i) + .25;
  //   },
  //   rotate: function() { return anime.random(-360, 360); },
  //   borderRadius: function() { return ['50%', anime.random(10, 35) + '%']; },
  //   duration: function() { return anime.random(1200, 1800); },
  //   delay: function() { return anime.random(0, 400); },
  //   direction: 'alternate',
  //   loop: true
  // });

} 
else {
  myNav.classList.remove("nav-color");
 
}
};

let an=anime({
  targets: '.st0',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 2000,
  delay: function(el, i) { return i * 250},
  direction: 'alternate',
  loop: true
});

// menu-btn-animetion

//para fade in animation from hidden to visible






