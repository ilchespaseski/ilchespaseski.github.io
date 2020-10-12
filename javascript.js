window.addEventListener('scroll',()=> {
    document.getElementById("navbar").style.opacity = "1";
    var scrolled = window.scrollY;
    if(scrolled === 0) 
    {
        document.getElementById("navbar").style.opacity = "0.7";

    }
})


var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
} 


  
  $(document).ready(function(){
    $(".header-text").animate({opacity: '0.5'}, "slow");
    $(".header-text").animate({opacity: '0.7'}, "slow");
    $(".header-text").animate({opacity: '0.9'}, "slow");

    $(".header-text").animate({opacity: '1'}, "slow");

      
    
  });
  $(document).ready(function(){
    $(".about-content").animate({opacity: '0.5'}, "slow");
    $(".about-content").animate({opacity: '0.7'}, "slow");
    $(".about-content").animate({opacity: '0.9'}, "slow");

    $(".header-text").animate({opacity: '1'}, "slow");

      
    
  });
  