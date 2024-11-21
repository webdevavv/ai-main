// -- header scroll --
document.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 0) {
        header.classList.add('header_active');
    } else {
        header.classList.remove('header_active');
    }
});

document.addEventListener("DOMContentLoaded", function () {
    // -- header --
    const menuBtn = document.querySelector('.menu-btn');
    const body = document.body;
    const menu = document.querySelector('.menu');
    const header = document.querySelector('.header');
    const menuLinks = document.querySelectorAll('.menu-list__link, .sub-menu-list__link');

    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('menu-btn_active');
        body.classList.toggle('menu-open');
        menu.classList.toggle('menu_active');
        header.classList.toggle('header_menu-open');
    });

    function closeMenu() {
        menuBtn.classList.remove('menu-btn_active');
        body.classList.remove('menu-open');
        menu.classList.remove('menu_active');
        header.classList.remove('header_menu-open');
    }

    menuLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // -- hero typing --
    var typed = new Typed('#hero-text-typing', {
        strings: ['контента'],
        typeSpeed: 50,
    });

    // -- slider-m-scroll --
    const sliderMScrollElements = document.querySelectorAll(".slider-m-scroll");
    function initializeSliderMScroll() {
        sliderMScrollElements.forEach((slider) => {
            if (window.innerWidth < 1280) {
                if (!slider.swiper) {
                    new Swiper(slider, {
                        spaceBetween: 20,
                        pagination: {
                            el: ".swiper-pagination",
                            clickable: true,
                        },
                        breakpoints: {
                            568: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        },
                    });
                }
            } else {
                if (slider.swiper) {
                    slider.swiper.destroy(true, true);
                }
            }
        });
    }

    initializeSliderMScroll();

    window.addEventListener("resize", initializeSliderMScroll);

    //  -- faq --
    const faqItems = document.querySelectorAll('.faq-list__item');

    if (faqItems.length > 0) {
        const firstItem = faqItems[0];
        const firstContent = firstItem.querySelector('.faq-list__cont');
        const firstInner = firstItem.querySelector('.faq-list__inner');

        firstItem.classList.add('faq-list__item_active');
        firstContent.style.height = `${firstInner.scrollHeight}px`;
    }

    faqItems.forEach(item => {
        const header = item.querySelector('.faq-list__header');
        const content = item.querySelector('.faq-list__cont');
        const inner = item.querySelector('.faq-list__inner');

        header.addEventListener('click', () => {
            const isActive = item.classList.contains('faq-list__item_active');

            faqItems.forEach(i => {
                i.classList.remove('faq-list__item_active');
                i.querySelector('.faq-list__cont').style.height = '0';
            });

            if (!isActive) {
                item.classList.add('faq-list__item_active');
                content.style.height = `${inner.scrollHeight}px`;
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const dropButtons = document.querySelectorAll('.menu-list__drop-btn');

    dropButtons.forEach((btn) => {
        btn.addEventListener('click', (event) => {
            event.stopPropagation();
            const drop = btn.nextElementSibling;
            const dropInner = drop.querySelector('.menu-list__drop-inner');

            const isActive = btn.classList.contains('menu-list__drop-btn_active');

            closeAllDrops();

            if (!isActive) {
                btn.classList.add('menu-list__drop-btn_active');
                drop.style.height = `${dropInner.scrollHeight}px`;
            }
        });
    });

    document.addEventListener('click', () => {
        closeAllDrops();
    });

    function closeAllDrops() {
        dropButtons.forEach((btn) => {
            const drop = btn.nextElementSibling;
            btn.classList.remove('menu-list__drop-btn_active');
            drop.style.height = '0';
        });
    }
});


// -- aos --
document.addEventListener('DOMContentLoaded', function () {
    if (window.innerWidth >= 1280) {
        AOS.init();
    }
});

window.addEventListener('resize', function () {
    if (window.innerWidth < 1280) {
        AOS.refreshHard();
    } else {
        AOS.init();
    }
});


// document.addEventListener("DOMContentLoaded", () => {
//     gsap.registerPlugin(ScrollTrigger);
//
//     const initAnimation = () => {
//         if (window.innerWidth > 1279) {
//             const timeline = gsap.timeline({
//                 scrollTrigger: {
//                     trigger: '.opts',
//                     start: 'top top',
//                     end: '+=1000',
//                     scrub: true,
//                     pin: true,
//                     anticipatePin: 1,
//                 }
//             });
//
//             timeline.to('.animation-card', {
//                 yPercent: -100,
//                 ease: 'none',
//                 stagger: 0.1,
//             });
//         }
//     };
//
//     initAnimation();
//
//     window.addEventListener('resize', () => {
//         ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//         initAnimation();
//     });
// });
