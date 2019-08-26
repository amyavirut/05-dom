let removeSelectedDOM = Array.from(document.getElementsByClassName('selected'))
removeSelectedDOM.forEach(element => { 
    if(element.classList.contains('selected')) {
        element.classList.remove('selected')
    }
})
console.log(removeSelectedDOM)