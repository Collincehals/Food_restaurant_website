let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}



let section = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header .navbar a');

window.onscroll = () =>{
  
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  section.forEach(sec => {
    let top = window.scrollY;
    let height = sec.offsetHeight;
    let offset  = sec.offsetTop-150;
    let id  = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navlinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header .navbar a[href*= '+id+']').classList.add('active');
      });
    };
  });
}


let searchForm = document.querySelector('.search-form');
let searchicon = document.querySelector('#search-icon');

searchicon.onclick=() => {
  searchForm.classList.toggle('active');
}

let closebtn = document.querySelector('#close-btn');

closebtn.onclick=() => {
  searchForm.classList.remove('active');
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


function loader(){
  document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
  setInterval(loader, 500);
}

window.onload = fadeOut;