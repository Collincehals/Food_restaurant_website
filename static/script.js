let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

let searchForm= document.querySelector('.search-form');

document.querySelector('#search-icon').onclick=() => {
  searchForm.classList.toggle('active');
}




var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      loop: true,
    });

var swiper = new Swiper(".review-container", {
      spaceBetween: 20,
      centeredSlides: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      loop: true,
      breakpoints: {
        0:{
          slidesPerView: 1,
        },
         640:{
          slidesPerView: 2,
        },
         768:{
          slidesPerView: 2,
        },
         1025:{
          slidesPerView: 3,
        },
      },
    });