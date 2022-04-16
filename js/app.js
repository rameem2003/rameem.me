var btn = document.getElementById("btn");
var header = document.getElementById("header");


var more = document.getElementById("more");
var load_btn = document.getElementById("load_btn");



btn.addEventListener("click", () => {
    header.classList.toggle("active");
});


load_btn.addEventListener("click", () => {
    more.style.display = "initial";
})

window.onscroll = () => {
    header.classList.remove("active");
}