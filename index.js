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


//Clearing form on submit

const name1 = document.querySelector('#name');
const email = document.querySelector('#email');
const number = document.querySelector('#number');
const message = document.querySelector('#message');
const submit = document.querySelector('#submit');

const numberPic = document.querySelector('.number-pic');
const emailPic = document.querySelector('.email-pic');

let cls = document.querySelector('.glow-submit-btn');
let clsHover = window.getComputedStyle(cls, ":hover");


// submit.addEventListener('submit', () => {
//     number.value = "";
//     message.value = "";
//     name1.value = "";
//     email.value = "";
// })

number.addEventListener('keydown', (event) => {

    let value;
    const timer = setTimeout(() => {
        value = number.value;

        if (value.length === 0) {
            number.classList.remove('input-invalid');
            number.classList.remove('input-valid');
            numberPic.src = "";
        }
        else if (value.length === 10) {
            number.classList.remove('input-invalid');
            number.classList.add('input-valid');
            numberPic.src = "images/valid.png";
        }
        else if ((value.length > 0 && value.length < 10)) {

            number.classList.remove('input-valid');
            number.classList.add('input-invalid');
            numberPic.src = "images/invalid.png";
        }

        else if (value.length > 10) {
            number.value = value.slice(0, 10);
            value = value.slice(0, 10);
            timer();
        }


        if ((number.classList.contains('input-invalid')) || (email.classList.contains('input-invalid'))) {
            submit.classList.remove('cursor-pointer');
            submit.classList.add('cursor-not-allowed');
            submit.disabled = true;
        }
        else {
            submit.classList.remove('cursor-not-allowed');
            submit.classList.add('cursor-pointer');
            submit.disabled = false;
        }

    }, 1);
});

number.classList.remove('input-invalid');
number.classList.remove('input-valid');


email.addEventListener('keydown', (event) => {
    let value;
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    const timer = setTimeout(() => {
        value = email.value;


        if (value.length === 0) {
            email.classList.remove('input-invalid');
            email.classList.remove('input-valid');
            emailPic.src = "";
        }

        else if (value.length > 0) {


            if (pattern.test(value)) {
                email.classList.remove('input-invalid');
                email.classList.add('input-valid');
                emailPic.src = "images/valid.png";
            }

            else {
                email.classList.remove('input-valid');
                email.classList.add('input-invalid');
                emailPic.src = "images/invalid.png";
            }
        }

        if ((number.classList.contains('input-invalid')) || (email.classList.contains('input-invalid'))) {
            submit.classList.add('cursor-not-allowed');
            submit.classList.remove('cursor-pointer');
            submit.disabled = true;
        }
        else {
            submit.classList.remove('cursor-not-allowed');
            submit.classList.add('cursor-pointer');
            submit.disabled = false;
        }

    }, 10);
});

email.classList.remove('input-invalid');
email.classList.remove('input-valid');





