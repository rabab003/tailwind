let menu = document.querySelector(".hamborger")
let listMneu = document.querySelector("#list-menu")

menu.addEventListener("click", () => {
    listMneu.classList.toggle("hidden")
    menu.classList.toggle("bg-white")
})