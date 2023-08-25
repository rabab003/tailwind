let menu = document.getElementById("menu");
let close = document.getElementById("close");
let menuPhone = document.getElementById("menu-phone");

menu.onclick = function() {
    close.classList.toggle("hidden");
    menu.classList.toggle("hidden");
    menuPhone.classList.toggle("hidden");
};
close.onclick = function() {
    close.classList.toggle("hidden");
    menu.classList.toggle("hidden");
    menuPhone.classList.toggle("hidden");
};