function clickMenu(){
    if (mobileMenu.style.display == 'block') {
        mobileMenu.style.display = 'none'

    } else { 
        mobileMenu.style.display = 'block'
    }
}



window.addEventListener("scroll", function(){
    let header = document.querySelector('#header')
    header.classList.toggle('rolagem', window.scrollY > 800);
});

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    var image = document.getElementById("logo-img");
    if (document.documentElement.scrollTop > 800)
        image.src = "IMG/logo-black.svg";
    else
        image.src = 
        "IMG/logo-white.svg";

var image = document.getElementById("menuImg");
if (document.documentElement.scrollTop > 800)
    image.src = "IMG/menu2.png";
else
    image.src = 
    "IMG/menu.png";
}
