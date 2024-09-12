const image = document.querySelector("#me")

console.log(image)

image.addEventListener("click", () => {
    const split_string = image.src.split("/")
    const image_file = split_string[split_string.length - 1]
    console.log(image_file)
    if(image_file == "me.jpg") {
        split_string[split_string.length - 1] = "cappy.jpg"
    } else {
        split_string[split_string.length - 1] = "me.jpg"
    }
    image.src = split_string.join("/")
})