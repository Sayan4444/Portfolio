//Auto Type
var options = {
    strings: ['Sayan', 'Web Developer', 'App Developer'],
    typeSpeed: 80,
    backSpeed: 120,
    loop: true
};

var typed = new Typed('.auto-type', options);

//Swipper

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// Animation
AOS.init();





//side-menu

const sideMenu = document.querySelector('.side-menu');
const sideMenuBtn = document.querySelector('.side-menu-btn');


sideMenuBtn.addEventListener('click', () => {
    //Changing logo
    sideMenuBtn.classList.toggle('fa-x');
    sideMenuBtn.classList.toggle('fa-bars');

    //Side menu swipe

    if (sideMenuBtn.classList.contains('fa-bars')) {
        sideMenu.style.right = "-300px";
    }
    else {
        sideMenu.style.right = "0px";
    }
})


// Full image view

const clk = document.querySelector('.clk');
clk.addEventListener('click', () => {
    window.open('./images/image.jpg')
})

//Navbar color change

const navBg = document.querySelector('.nav-bg');

// const navBgColor = () => {
//     let scrollvalue = window.scrollY;
//     if (scrollvalue > 0) navBg.style.backgroundColor = "#14171c";
//     else navBg.style.backgroundColor = '#000000';

// }

// window.addEventListener('scroll', navBgColor);

let temp = 0;
window.onscroll = () => {
    reviewSection();
    let scrollvalue = window.scrollY;
    if (scrollvalue > 0) navBg.style.backgroundColor = "#14171c";
    else navBg.style.backgroundColor = '#000000';
    if (window.innerWidth < 976) {
        if (!(sideMenuBtn.classList.contains('.fa-bars'))) {
            if (Math.abs(temp - scrollvalue) < 5) {
                sideMenuBtn.classList.remove('fa-x');
                sideMenuBtn.classList.add('fa-bars');
                sideMenu.style.right = "-300px";
            }
        }
    }
    temp = scrollvalue;
}

//Having scroll bar on the top
const review = document.querySelector('.swiper');

const reviewSection = () => {
    if ((sideMenuBtn.classList.contains('.fa-bars'))) {
        review.classList.add('.z-10');
        review.classList.remove('.-z-10');
    }
    else {
        review.classList.add('.z-10');
        review.classList.remove('.-z-10');
    }
}

reviewSection();

// Adding lines in text area

const textAreas = document.getElementsByTagName('textarea');

Array.prototype.forEach.call(textAreas, function (elem) {
    elem.placeholder = elem.placeholder.replace(/\\n/g, '\n');
});


//Clearing form on submit

const name1 = document.querySelector('#name');
const email = document.querySelector('#email');
const number = document.querySelector('#number');
const message = document.querySelector('#message');
const submit = document.querySelector('#submit');

submit.addEventListener('click', () => {
    if (email.value.length !== 0 && number.value.length !== 0 && message.value.length !== 0 && name1.value.length !== 0) {
        number.value = "";
        message.value = "";
        name1.value = "";
        email.value = "";
    }
})
