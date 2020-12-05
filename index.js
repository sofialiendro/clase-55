const dropdown = document.querySelector("#dropdown")

dropdown.onmouseenter = () => {
    dropdown.classList.add("is-active")
}

dropdown.onmouseleave = () => {
    dropdown.classList.remove("is-active")
}