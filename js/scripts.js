window.addEventListener('scroll', function () {
    let scrollpos = window.scrollY;

    if (scrollpos > 10) {
        document.querySelector('header').classList.add('header--shrinked');
    } else {
        document.querySelector('header').classList.remove('header--shrinked');
    }
});

window.addEventListener('scroll', function () {
    var element = document.querySelector('header');
    // var position = element.getBoundingClientRect();

    // checking whether fully visible
    // if (position.top >= 0 && position.bottom <= window.innerHeight) {
    //     console.log('Element is fully visible in screen');
    // }

    // checking for partial visibility
    // if (position.top < window.innerHeight && position.bottom >= 0) {
    // console.log('Element is partially visible in screen');
    // document.querySelector('.has-two-devices').style.transform = "translateY(0)";
    // } else {
    // document.querySelector('.has-two-devices').style.transform = "translateY(-240px)";
    // }

    if (document.body.scrollTop >= element.offsetHeight) {
        document.querySelector('.has-two-devices').style.transform = "translateY(-240px)";
    } else {
        document.querySelector('.has-two-devices').style.transform = "translateY(0)";
    }
});