const date = new Date();
let year = date.getFullYear();
document.querySelector('.copyrights__year').innerHTML = year;

const navItems = document.querySelectorAll('nav a');
for (const item of navItems) {
    item.addEventListener('click', clickHandler);
}
function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute('href');
    const offsetTop = document.querySelector(href).offsetTop;

    scroll({
        top: offsetTop,
        behavior: 'smooth'
    });
}

function toggleShrink() {
    let scrollpos = window.scrollY;

    if (scrollpos > 10) {
        document.querySelector('header').classList.add('header--shrinked');
    } else {
        document.querySelector('header').classList.remove('header--shrinked');
    }
}
window.addEventListener('scroll', toggleShrink);
window.addEventListener('load', toggleShrink);


// window.addEventListener('resize', function () {
//     if (window.innerWidth <= '992') {
//         document.querySelector('.has-two-devices').style.display = 'none';
//     }
// });

function slidePreview() {
    if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        if (window.innerWidth >= '992') {
            let element = document.querySelector('.features');
            let position = element.getBoundingClientRect();

            // checking whether fully visible
            // if (position.top >= 0 && position.bottom <= window.innerHeight) {
            //     console.log('Element is fully visible in screen');
            // }

            // checking for partial visibility
            if (position.top < window.innerHeight - 200 && position.bottom >= 0) {
                // console.log('Element is partially visible in screen');
                document.querySelector('.has-two-devices').style.transform = 'translateY(0)';
            } else {
                // console.log('Element is not visible in screen');
                document.querySelector('.has-two-devices').style.transform = 'translateY(-240px)';
            }
        }
    }
}
window.addEventListener('scroll', slidePreview);

function stopSlidePreview() {
    if (window.innerWidth >= '992') {
        document.querySelector('.has-two-devices').style.transform = 'translateY(0)';
    }
}
window.addEventListener('resize', stopSlidePreview);

if (document.querySelector('.swiper')) {
    var swiper = new Swiper('.swiper', {
        slidesPerView: 'auto',
        centeredSlides: true,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true,
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
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

const planMoreBtns = document.querySelectorAll('.show-more--btn');
planMoreBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        btn.closest('.plan').classList.toggle('details--shown');
        if (btn.closest('.plan').classList.contains('details--shown')) {
            btn.previousElementSibling.style.maxHeight = btn.previousElementSibling.scrollHeight + 'px';
            btn.querySelector('span').textContent = 'Show less';
        } else {
            btn.previousElementSibling.style.maxHeight = 0;
            btn.querySelector('span').textContent = 'Show more';
        }
    });
});

const mobileMenuToggle = document.querySelectorAll('.mobile-menu__toggle');
mobileMenuToggle.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('body').classList.toggle('mobile-menu--shown');
    });
});

const featuresTabs = document.querySelectorAll('.features__tabs a');
featuresTabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
        e.preventDefault();

        let tabContent = tab.getAttribute('data-tab');
        tab.closest('.features__tabs').querySelector('.active').classList.remove('active');
        tab.classList.add('active');
        tab.closest('.features__tabs').nextElementSibling.querySelectorAll('.tab-content.tab-content--shown').forEach(tabContent => {
            tabContent.classList.remove('tab-content--shown');
        });
        tab.closest('.features__tabs').nextElementSibling.querySelector('[data-content="' + tabContent + '"]').classList.add('tab-content--shown');
    });
});