
// meniu animation 
const menuItems = document.querySelectorAll('.meniu a');
menuItems.forEach((item, index) => {
    anime({
        targets: item,
        opacity: [0, 1],
        translateY: [20, 0],
        delay: index * 200,  
        duration: 1000,
        easing: 'easeInOutSine'
    });
});

 
const searchIcon = document.getElementById('searchIcon');
anime({
    targets: searchIcon,
    opacity: [0, 1],
    scale: [0.5, 1],
    duration: 2000,
    easing: 'easeInOutSine'
});

const logoSvg = document.getElementById('log');
anime({
    targets: logoSvg,
    opacity: [0, 1],
    duration: 2000,
    easing: 'easeInOutSine'
});

const about = document.getElementById('about');
anime({
    targets: about,
    opacity: [0, 1],
    delay: 100,
    duration: 3000,
    easing: 'easeInOutSine'
});

   
    const bellIcon = document.querySelector('.fa-regular.fa-bell');
    anime({
        targets: bellIcon,
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 1000,
        easing: 'easeInOutSine'
    });

    const search = document.getElementById('search');
    anime({
        targets: search,
        opacity: [0, 1],
        duration: 4000,
        easing: 'easeInOutSine'
    });
