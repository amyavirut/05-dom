let handleButton = (element) => {
    element.classList.toggle('on')
    if (element.classList.toggle('off')) {
        element.innerHTML = "OFF"
    } else {
        element.innerHTML = "ON"
    }
}


