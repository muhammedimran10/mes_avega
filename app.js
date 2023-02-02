const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navigation');
    const navlinks = document.querySelectorAll('.navigation li')

    burger.addEventListener('click',()=>{
        // toogle nav
        nav.classList.toggle('nav-active')

        navlinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation='';
            }else{
                link.style.animation = `navlinkFade 0.5s ease forwards  ${index / 7 + .5}s`;
            }
        });
    });
}

navSlide();