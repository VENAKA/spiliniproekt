let arrowLeft = document.querySelector('.arrow-left');

let arrowRight = document.querySelector('.arrow-right');

let slider = document.querySelector('.slider');

let sliderSlide = document.querySelectorAll('.slider__slide');

let currentIndex = 0;

let markers = document.querySelectorAll('.slider-menu__nav-link');

let colors = ["#ffa968", "#642d68", "#d30308", "#00afc7"];

let colors2 = ["#6eb1fe", "#b96690", "#000000", "#00ffff"];

let yColor1 = document.querySelectorAll('.y-color1');

let yColor2 = document.querySelectorAll('.y-color2');

let sliderMenu = document.querySelectorAll('.slider-menu__nav');

let boxBD = document.querySelectorAll('.y-main__box')

let boxDW = document.querySelectorAll('.y-download__image')



yColor1.forEach(element => {
    element.addEventListener('mouseover', () => {
        if (currentIndex === 0) {
            element.style.textShadow = "2px 0 0 #f07320";
        }
    });
    element.addEventListener('mouseout', () => {
        if (currentIndex === 0) {
            element.style.textShadow = "";
        }
    });
});

yColor1.forEach(element => {
    element.addEventListener('mouseover', () => {
        if (currentIndex === 2) {
            element.style.transform = "scale(1.2)";
            element.style.zIndex = "1";
        }
    });
    element.addEventListener('mouseout', () => {
        if (currentIndex === 2) {
            element.style.transform = "scale(1)";
            element.style.zIndex = "0";
        }
    });
});

yColor1.forEach(element => {
    element.addEventListener('mouseover', () => {
        if (currentIndex === 1) {
            element.style.color = "#d09ac0";
            
        }
    });
    element.addEventListener('mouseout', () => {
        if (currentIndex === 1) {
            element.style.color = "#642d68";
            
        }
    });
});
yColor1.forEach(element => {
    element.addEventListener('mouseover', () => {
        if (currentIndex === 3) {
            element.style.transform = "skew(10deg)"
        }
    });
    element.addEventListener('mouseout', () => {
        if (currentIndex === 3) {
            element.style.transform = "skew(0deg)"
        }
    });
});

function colorChange() {
    yColor1.forEach(element => {
        element.style.color = colors[currentIndex];
    });
}
function colorChange2() {
    yColor2.forEach(element => {
        element.style.color = colors2[currentIndex];
    });
}

function colorChangeBorder() {
    sliderMenu.forEach(element => {
        element.style.borderColor = colors[currentIndex];
        element.style.transition = "0.3s"
    });
}

function colorChangeBorder2() {
    boxBD.forEach(element => {
        element.style.borderColor = colors2[currentIndex];
        element.style.transition = "0.3s"
        if (currentIndex === 2) {
            element.style.borderColor = colors[currentIndex];
        }
    });
}

function colorChangeBorder3() {
    boxDW.forEach(element => {
        element.style.borderColor = colors2[currentIndex];
        element.style.transition = "0.3s"
        if (currentIndex === 2) {
            element.style.borderColor = colors[currentIndex];
        }
    });
}

function colorShadow() {
    if (currentIndex === 2) {
        yColor2.forEach(element => {
            element.style.textShadow = "2px 2px 0 #d30308, -2px 2px 0 #d30308, 2px -2px 0 #d30308, -2px -2px 0 #d30308";
        });
    }
    else {
        yColor2.forEach(element => {
            element.style.textShadow = "";
        });
    }
}


function mainChange() {
    colorChange();
    colorChange2() 
    colorShadow()
    colorChangeBorder()
    colorChangeBorder2()
    colorChangeBorder3()
}

function showTheSlide(index) {
    slider.style.transform = `translateX(-${index * 100}%)`;
}

function whatTheSlide(slide) {
    currentIndex = slide;
    showTheSlide(currentIndex);
    mainChange()
}

function goPrewSlide() {
    currentIndex = (currentIndex - 1 + sliderSlide.length) % sliderSlide.length;
    showTheSlide(currentIndex);
    mainChange()
}

function goNextSlide() {
    currentIndex = (currentIndex + 1) % sliderSlide.length;
    showTheSlide(currentIndex);
    mainChange()
}

for (let i = 0; i < markers.length; i++) {
    markers[i].addEventListener('click', function() {
        whatTheSlide(i);
    });
}

arrowLeft.addEventListener('click', goPrewSlide);
arrowRight.addEventListener('click', goNextSlide);