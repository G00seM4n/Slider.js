
    'use strict';

    const slider = document.querySelector('.slider');
    const btnPrev = document.querySelector('.prev');
    const btnNext = document.querySelector('.next');

    let slideWidth = document.querySelector('.slide').offsetWidth;
    let sliderWidth = slider.childElementCount * slideWidth;
    let slideOffset = 0;

    btnNext.onclick = function() {
        slideOffset += slideWidth;

        if(slideOffset >= sliderWidth) slideOffset = 0;

        slider.style.left = -slideOffset + 'px';
    };

    btnPrev.onclick = function() {
        if(slideOffset == 0) slideOffset = sliderWidth;
        
        slideOffset -= slideWidth;
        slider.style.left = -slideOffset + 'px';
    };
