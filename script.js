document.addEventListener("DOMContentLoaded", function() {
    const image = document.getElementById("portfolioImage");

    image.addEventListener("click", function() {
        this.classList.toggle("enlarged");
    });
});