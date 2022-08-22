let txt=document.getElementById('txt');

// change id='txt' text to "hi", "bye", "hs", "goodbye" after 1 second
let index=0;
function anim(){
txt.classList.add("c-lang");
// txt.innerHTML=lang[index];
animateText2();
if(index==lang.length-1){
  index=0;
}
else{
  index++;
}
setTimeout(anim,1000);
}

/* Column 4/12 */
#servics .text-danger .ds{
  transform:translatex(0px) translatey(0px);
 }
 
 /* Heading */
 .text-danger .ds h1{
  padding-left:0px;
 }
 
 /* Paragraph */
 .text-danger .ds p{
  position:absolute;
  transform:translatex(0px) translatey(0px);
  margin-left:auto;
  margin-right:auto;
  margin-top:auto;
  margin-bottom:auto;
 }
 
 /* Heading */
 header .all #servics .container .text-danger .ds h1{
  margin-left:auto !important;
  margin-right:auto !important;
  margin-top:auto !important;
  margin-bottom:auto !important;
 }