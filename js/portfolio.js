let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
//intersection observer 
var obitem=document.querySelectorAll('.obitem');
for(let i=0;i<obitem.length;i++){
var io=new IntersectionObserver(function(entries){
    entries.forEach(entry=>{
        if(entry.isIntersecting){
           
            var fadeInUp=anime(
                {
                    targets: entry.target,
                    opacity: [0,1],
                    easing: 'easeOutSine',
                    duration: 500,
                    translateY: ['100%','0%'],
                    autoplay: false,
                }
            );
            fadeInUp.play();
            io.unobserve(entry.target);
        }
    }
    );
    }
    ,{ threshold: .3});
}
//intersection observer on about section to animate the text once the section is visible
 obitem.forEach(function(item){
    io.observe(item);
}
);