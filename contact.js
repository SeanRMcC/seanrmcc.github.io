const email = document.querySelector(".email")

email.addEventListener("click", () => {
    navigator.clipboard.writeText("mccartys@bu.edu")
})