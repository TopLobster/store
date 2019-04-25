'use strict';

const nav = document.querySelector(".sticky-modifier");

const stickyNav = target => {
    const io = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.intersectionRatio < 0.05) {
                nav.classList.add('fixed-position');
            } else if (entry.intersectionRatio > 0) {
                nav.classList.remove('fixed-position');
            }
        });
    }, {
        threshold: 0.05      
    });
    io.observe(target);
};

stickyNav(document.querySelector('#slides'));