const date = new Date();
let year = date.getFullYear();
document.querySelector('.copyrights__year').innerHTML = year;

window.addEventListener('scroll', function () {
    let scrollpos = window.scrollY;

    if (scrollpos > 10) {
        document.querySelector('header').classList.add('header--shrinked');
    } else {
        document.querySelector('header').classList.remove('header--shrinked');
    }
});

window.addEventListener('scroll', function () {
    var element = document.querySelector('.features');
    var position = element.getBoundingClientRect();

    // checking whether fully visible
    // if (position.top >= 0 && position.bottom <= window.innerHeight) {
    //     console.log('Element is fully visible in screen');
    // }

    // checking for partial visibility
    if (position.top < window.innerHeight - 200 && position.bottom >= 0) {
        // console.log('Element is partially visible in screen');
        document.querySelector('.has-two-devices').style.transform = "translateY(0)";
    } else {
        // console.log('Element is not visible in screen');
        document.querySelector('.has-two-devices').style.transform = "translateY(-240px)";
    }
});

if (document.querySelector('.swiper')) {
    var swiper = new Swiper('.swiper', {
        slidesPerView: "auto",
        centeredSlides: true,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        grabCursor: true,
        // mousewheel: true,
        keyboard: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false
        }
    });
}

// document.onmousemove = function (e) {
//     document.querySelector('.orb').style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
// }