let menu = document.querySelector(".hamborger")
let listMneu = document.querySelector("#list-menu")
let hlinks = document.querySelectorAll("#hlink")
let moon = document.querySelector("#moon")
let body = document.querySelector("body")


menu.addEventListener("click", () => {
    listMneu.classList.toggle("hidden")
    menu.classList.toggle("bg-white")
})


moon.addEventListener("click", () => {
    body.classList.toggle("dark")
    menu.classList.toggle("bg-white")

})

hlinks.forEach(link => {
    link.addEventListener("click", () => {
        listMneu.classList.toggle("hidden")
        menu.classList.toggle("bg-white")
    })
})