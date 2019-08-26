// First get all of the products by class and collect into Array
let productClassesDOM = Array.from(document.getElementsByClassName('product'))
// Generate the new HTML of the div#products element
let newHTML = productClassesDOM.map(e => e.outerHTML).join("")
// Get div#products
let productsIdDOM = document.getElementById("products")
// Overwrite content of div#products with copy of products HTML generated earlier
productsIdDOM.innerHTML = newHTML


// Array.from(productClassesDOM)
// document.getElementById("products").innerHTML = productsIdDOM.map(e => e.outerHTML).join("\n")
// document.getElementById("products")
