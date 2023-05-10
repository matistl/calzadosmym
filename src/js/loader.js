function hideLoader() {
    document.querySelector("#loader").style.display = "none";
    document.querySelector("#loader-wrapper").style.height = "0"
    document.body.style.overflowY = "unset"
}

window.addEventListener("load", function() {
    this.document.body.style.overflowY = "hidden"
    this.window.scrollTo(0, 0)
    setTimeout(function() {
        hideLoader();
    }, 1300);
});