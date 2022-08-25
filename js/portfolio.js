
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
                    duration: 800,
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