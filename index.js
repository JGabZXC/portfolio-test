const navbar = document.querySelector('.navmenu');
const hamburger = document.querySelector('.hamburger');
const header = document.querySelector('.primary-header');

hamburger.addEventListener("click", function () {
    navbar.classList.toggle("active");
    hamburger.classList.toggle("active");
    header.classList.toggle("active");
    
    if(navbar.classList.contains("active")) {
        document.body.style.position = "fixed";
    } else {
        document.body.style.position = "static";
    }
});



const navItem = document.querySelectorAll('.navitem').length;

for(var i = 0; i < navItem; i++) {
    
    document.querySelectorAll('.navitem')[i].addEventListener("click", function() {
        document.body.style.position = "static";
        navbar.classList.remove("active");
        hamburger.classList.remove("active");
        header.classList.remove("active");
        
    });
}