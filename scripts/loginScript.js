addEventListener("load", () => {
    addEventListener("onsubmit", (event) => {
        const regex = new RegExp("^\+380\s\d{2}\s\d{7}$")
        const userContacts = document.getElementById("user-contacts").value
        if (regex.test(userContacts)) {
            document.getElementById("user-contacts-type").value = "telephone"
        } else {
            document.getElementById("user-contacts-type").value = "email"
        }
        alert(regex.test(userContacts))
    })
})