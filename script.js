const menu = document.getElementById("menu");
const action = document.getElementById("action");

menu.addEventListener("click",() => {
    hundleMenu();
});

function hundleMenu(){
    menu.classList.toggle("is-active");
    action.classList.toggle("is-active");
}

document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll('nav ul li a');

    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault(); // Prevent default link behavior

            const targetId = this.getAttribute("href").substring(1); // Remove #
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 60, // Adjust for fixed navbar
                    behavior: "smooth"
                });
            }
        });
    });
});
