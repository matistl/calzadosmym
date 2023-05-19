function positionNav() {
    let navRect = document.querySelector('.navbar').getBoundingClientRect();
    let cajaRect = document.querySelector('article').getBoundingClientRect();
    let navlink = document.querySelectorAll('.nav-link');
    let logo = document.querySelector(".mym-logo");
    let toggler = document.querySelector(".navbar-toggler-icon");
    for (let i = 0; i < navlink.length; i++) {
        if (navRect.right >= cajaRect.left && navRect.left <= cajaRect.right && navRect.bottom >= cajaRect.top && navRect.top <= cajaRect.bottom) {
            navlink[i].classList.add("nav-black");
            logo.classList.add("nav-black");
            toggler.classList.add("nav-black");
        } else {
            navlink[i].classList.remove("nav-black");
            logo.classList.remove("nav-black");
            toggler.classList.remove("nav-black");
        }
    }
}

let previousSize = window.innerWidth

window.addEventListener("resize", () => {
    positionNav()
    const element = document.getElementById("navbarNav")
    if (window.innerWidth >= 1024 && element.classList.contains("show")) {
        element.classList.remove("show")
    }
    if (previousSize > 765 && window.innerWidth <= 765) {
        document.querySelector("#allCards").innerHTML = "";
        injectedCards()
        previousSize = window.innerWidth
    } else if (previousSize <= 765 && window.innerWidth > 765) {
        document.querySelector("#allCards").innerHTML = "";
        injectedCards()
        previousSize = window.innerWidth
    }
})

window.addEventListener('scroll', function () {
    positionNav()
});