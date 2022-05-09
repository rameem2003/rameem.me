var btn = document.getElementById("btn");
var header = document.getElementById("header");


var portfolioList_load_more = document.querySelector(".portfolioList");
var load_btn = document.getElementById("load_btn");



btn.addEventListener("click", () => {
    header.classList.toggle("active");
});


load_btn.addEventListener("click", () => {
    portfolioList_load_more.classList.toggle("load");
})

window.onscroll = () => {
    header.classList.remove("active");
}