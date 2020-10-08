window.addEventListener('scroll',()=> {
    document.getElementById("navbar").style.opacity = "1";
    var scrolled = window.scrollY;
    if(scrolled === 0) 
    {
        document.getElementById("navbar").style.opacity = "0.7";

    }
})