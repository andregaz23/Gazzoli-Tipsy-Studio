document.addEventListener("DOMContentLoaded", function() {
    const image = document.getElementById("portfolioImage");

    image.addEventListener("click", function(event) {
        if (!this.classList.contains("enlarged")) {
            this.classList.add("enlarged");
            document.addEventListener("click", handleOutsideClick);
        }
    });

    function handleOutsideClick(event) {
        const image = document.getElementById("portfolioImage");
        if (!image.contains(event.target)) {
            image.classList.remove("enlarged");
            document.removeEventListener("click", handleOutsideClick);
        }
    }
});
 

document.addEventListener('DOMContentLoaded', function() {
  const burgerMenu = document.querySelector('.burger-menu');
  const navLinks = document.querySelector('.nav-links');
  
  burgerMenu.addEventListener('click', function() {
    navLinks.classList.toggle('active');
  });
showSlides(slideIndex);
});

let slideIndex = 1;

function plusSlides(n) {
showSlides(slideIndex += n);
}

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


let slideIndex2 = 1;


function plusSlides2(n) {
showSlides2(slideIndex2 += n);
}
