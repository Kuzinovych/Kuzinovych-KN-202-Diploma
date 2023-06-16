const surnameInput = document.getElementById("surname")
const nameInput = document.getElementById("name")

addEventListener("load", () => {
    document.getElementById("male").addEventListener("change", () => {
        document.getElementsByName('surname')[0].placeholder = "Бараник"
        document.getElementsByName('name')[0].placeholder = "Юрій"
    })
    document.getElementById("female").addEventListener("change", () => {
        document.getElementsByName('surname')[0].placeholder = "Туптало"
        document.getElementsByName('name')[0].placeholder = "Юліанна"
    })
})