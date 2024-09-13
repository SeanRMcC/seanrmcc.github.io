const image = document.querySelector("#me")

console.log(image)

image.addEventListener("click", () => {

    pictures = ["cappy.jpg", "bingus.webp", "pibble.jpeg"]

    const split_string = image.src.split("/")
    const image_file = split_string[split_string.length - 1]
    if(image_file == "me.jpg") {
        const randomPicture = pictures[Math.floor(Math.random() * pictures.length)];
        console.log(randomPicture)
        split_string[split_string.length - 1] = randomPicture
    } else {
        split_string[split_string.length - 1] = "me.jpg"
    }
    image.src = split_string.join("/")
})