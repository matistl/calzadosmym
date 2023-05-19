let previousSize = window.innerWidth
window.addEventListener("resize", () => {
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