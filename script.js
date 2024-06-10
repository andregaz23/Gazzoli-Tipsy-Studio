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
