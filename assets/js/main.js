/*=============== SEARCH ===============*/

const searchButton = document.getElementById('search-button'),
      searchClose = document.getElementById('search-close'),
      searchContent = document.getElementById('search-content')

/* Search show */
if(searchButton){
   searchButton.addEventListener('click', () =>{
        searchContent.classList.add('show-search')
    })
}

/* Search hidden */
if(searchClose){
    searchClose.addEventListener('click', () =>{
        searchContent.classList.remove('show-search')
    })
}



/*=============== LOGIN ===============*/

const loginButton = document.getElementById('login-button'),
      loginClose = document.getElementById('login-close'),
      loginContent = document.getElementById('login-content')

/* Login show */
if(loginButton){
   loginButton.addEventListener('click', () =>{
        loginContent.classList.add('show-login')
    })
}

/* Login hidden */
if(loginClose){
    loginClose.addEventListener('click', () =>{
        loginContent.classList.remove('show-login')
    })
}

/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () =>{
    const header = document.getElementById('header')
    // /when scroll is greater than viewport 
    this.scrollY >= 50 ? header.classList.add('shadow-header')
    : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

/*=============== HOME SWIPER ===============*/
let swiperHome = new Swiper('.home-swiper', {
    // optional params
    // direction:'vertical',
    loop:true,
    spaceBetween:-24,
    grabCursor:true,
    slidesPerView:'auto',
    centeredSlides:'auto',
    autoplay:{
        delay: 3000,
        disableOnInteraction: false,
    },
    breakpoints: {
1220:{
    spaceBetween: -32,
}
    }
// // if we need pagination 
// pagination:{
//     el: '.swiper-pagination', 
// },
// // navigation arrows 
// navigation:{
//     nextEl:'.swiper-button-next',
//     prevEl:'.swiper-button-prev',
// },
// // and if we need scrollbar
// scrollbar:{
//     el:'.swiper-scrollbar',
// }

})

/*=============== FEATURED SWIPER ===============*/
let swiperFeatured = new Swiper('.featured-swiper', {
    // optional params
    // direction:'vertical',
    loop:true,
    spaceBetween:16,
    grabCursor:true,
    slidesPerView:'auto',
    centeredSlides:'auto',
    

    navigation:{
        nextEl:'swiper-button-next',
        prevEl:'swiper-button-prev',
    },
    breakpoints: {
1150:{
    slidesPerView: 4,
    centeredSlides: false,
}
    }})

/*=============== NEW SWIPER ===============*/
let swiperNew = new Swiper('.new-swiper', {
    // optional params
    // direction:'vertical',
    loop:true,
    spaceBetween:16,
    slidesPerView:'auto',

    breakpoints: {
1150:{
    slidesPerView: 3,
}
    }})

/*=============== TESTIMONIAL SWIPER ===============*/


/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
    : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== DARK LIGHT THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance:'60px',
    duration: 2500,
    delay:400,

})
sr.reveal('.home-data, .featured-container,.new-container,.join-data, .testimonial-container, .footer')
sr.reveal('.home-images', {delay:600})
sr.reveal('.service-card',{interval:100})
sr.reveal('.discount-data',{origin: 'left'})
sr.reveal('.discount-images',{origin: 'right'})



