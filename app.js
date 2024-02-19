

const slider = document.querySelector('#myRange')
const priceMobile = document.querySelector('.price')
const priceDesktop = document.querySelector('.price-desktop')
const pageViews = document.querySelector('.many-pageviews')
const toggle = document.querySelector('.toggle-input')
const discount = document.querySelector('.discount')

priceMobile.innerHTML = `$ ${slider.value}`
priceDesktop.innerHTML = `$ ${slider.value}`


toggle.addEventListener('click', function(e) {
    if(toggle.checked) {
        discount.style.backgroundColor = 'hsl(14, 71%, 57%)'
        discount.style.color = 'white'
    } else {
        discount.style.backgroundColor = 'hsl(14, 92%, 95%'
        discount.style.color = 'coral' 
    }
})
slider.addEventListener('input', function() {
    priceMobile.innerHTML = `$ ${this.value}`
    priceDesktop.innerHTML = `$ ${this.value}`
    let x = Number(slider.value)
    let color =`linear-gradient(90deg, rgb(93, 234, 220) ${x}%, rgb(214,214,214) ${x}%)`;
    slider.style.background = color
    // prices with 25% discount
    if(toggle.checked) {
        if(x <= 20) {
            let discountedVal = (8 * 25) /100
            let sum = 8 - discountedVal
            priceMobile.innerHTML = `$ ${sum}.00`
            priceDesktop.innerHTML = `$ ${sum}.00`
            pageViews.innerHTML = '10K'
        } else if( x <= 40) {
            let discountedVal = (12 * 25) /100
            let sum = 12 - discountedVal
            priceMobile.innerHTML = `$ ${sum}.00`
            priceDesktop.innerHTML = `$ ${sum}.00`
            pageViews.innerHTML = '50K'
        } else if( x <= 60) {
            let discountedVal = (16 * 25) /100
            let sum = 16 - discountedVal
            priceMobile.innerHTML = `$ ${sum}.00`
            priceDesktop.innerHTML = `$ ${sum}.00`
            pageViews.innerHTML = '100K'
        } else if( x <= 80) {
            let discountedVal = (24 * 25) /100
            let sum = 24 - discountedVal
            priceMobile.innerHTML = `$ ${sum}.00`
            priceDesktop.innerHTML = `$ ${sum}.00`
            pageViews.innerHTML = '500K'
        } else if( x <= 100) {
            let discountedVal = (36 * 25) /100
            let sum = 36 - discountedVal
            priceMobile.innerHTML = `$ ${sum}.00`
            priceDesktop.innerHTML = `$ ${sum}.00`
            pageViews.innerHTML = '1M'
        } 
    } 
    //prices without discount
    else {
        if(x <= 20) {
            priceMobile.innerHTML = '$8.00'
            priceDesktop.innerHTML = '$8.00'
            pageViews.innerHTML = '10K'
        } else if( x <= 40) {
            priceMobile.innerHTML = '$12.00'
            priceDesktop.innerHTML = '$12.00'
            pageViews.innerHTML = '50K'
        } else if( x <= 60) {
            priceMobile.innerHTML = '$16.00'
            priceDesktop.innerHTML = '$16.00'
            pageViews.innerHTML = '100K'
        } else if( x <= 80) {
            priceMobile.innerHTML = '$24.00'
            priceDesktop.innerHTML = '$24.00'
            pageViews.innerHTML = '500K'
        } else if( x <= 100) {
            priceMobile.innerHTML = '$36.00'
            priceDesktop.innerHTML = '$36.00'
            pageViews.innerHTML = '1M'
        } 
    }
  
})
