
var myNav = document.getElementById('mynav');
var gback= document.getElementById('g-back');

// var gback2= document.getElementsByClassName('g-back');
//array  of languages
//const lang=["Hello!","नमस्ते!","নমস্কার!","こんにちは!","Bonjour!","Привет!","¡Hola!","Salve!","Ciao!"];

// change id='txt' text to "hi", "bye", "hs", "goodbye" after 1 second
// let txt=document.getElementById('txt');

// // change id='txt' text to "hi", "bye", "hs", "goodbye" after 1 second
// let index=0;
// function anim(){
// txt.innerHTML=lang[index];
// // txt.classList.add("c-lang");
// //animatetext(lang[index]);
// if(index==lang.length-1){
//   index=0;
// }
// else{
//   index++;
// }
// setInterval(function(){
//   txt.classList.remove("c-lang");},2000);
// setTimeout(anim,4000);
// }
// window.onload = anim;

//   let index1=0;
//   function animatetext(value){
//   "use strict";
//   let txt1=document.getElementById('txt');
//   let i=0;
//   let speed=100;
//   let text=value;
//   let index1=0;
//   let timer=setInterval(function(){
//     if(i<text.length){
//       txt1.innerHTML+=text.charAt(i);
//       i++;
//     }
//     else{  
//       clearInterval(timer);
//     }
//   },speed);
// }

// var targ=document.querySelectorAll('section:nth-child(even)');
// var len=targ.length;
// for(var i=0;i<len;i++){
//   //targ[i].style.backgroundColor="white";
//   targ[i].classList.add("alt-color");
// }

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

// let an=anime({
//   targets: '.st0',
//   strokeDashoffset: [anime.setDashoffset, 0],
//   easing: 'easeInOutSine',
//   duration: 2000,
//   delay: function(el, i) { return i * 250},
//   direction: 'alternate',
//   loop: true
// });

var abt=anime.timeline({
  
  duration: 800,
  autoplay: false,
});
abt.add({
  targets: '.el',
  opacity: [0, 1],
  easing: 'easeOutExpo',
  scale:[0.5,1],
  translateX: ["120%","0%"],
  delay: function(el, i, l) { 
    return i * 100; }
 })
 .add(
  {
    targets: '.pl',
    opacity: [0,1],
    easing: 'easeOutSine'
  }, '-=500')
  .add(
    {
      targets: '.favicon',
      easing: 'easeOutCubic',
      opacity: [0,1],
    }, '-=700'
  );
//intersection observer on about section to animate the text once the section is visible
const about = document.querySelector('#aboutme');
const aboutObserver = new IntersectionObserver(function(entries) {
  if(entries[0].isIntersecting) {
    gback.classList.add("gold-back-reavel-in");
    
    abt.play();
    aboutObserver.unobserve(about);
  }
} , { threshold: 0.5 });
aboutObserver.observe(about);

function resNav() {
  let y=document.getElementById("ibar");
   let x= document.getElementById("colNav");
  if (x.className === "collapse") {
    x.className = "navbar-open";
    y.className = "fa-solid fa-x";
  }
  else {
    x.className = "collapse";
    y.className = "fa-solid fa-bars";
  }
}
