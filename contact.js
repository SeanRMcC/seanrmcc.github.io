const email = document.querySelector(".email")

email.addEventListener("click", () => {
    navigator.clipboard.writeText("mccartys@bu.edu").then(
        () => {
            email.textContent = "email copied to clipboard"
            setTimeout(() => {
                email.textContent = "mccartys@bu.edu"
            }, 300)
        }
    )
})