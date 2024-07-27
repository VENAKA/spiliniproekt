let arrowLeft = document.querySelector('.arrow-left');

let arrowRight = document.querySelector('.arrow-right');

let slider = document.querySelector('.slider');

let sliderSlide = document.querySelectorAll('.slider__slide');

let currentIndex = 0;

let markers = document.querySelectorAll('.slider-menu__nav-link');



let colors = ["#ffa968", "#642d68", "#d30308", "#00afc7"];

let colorsBottom = ["#a56e4a", "#441e46", "#930709", "#038091"]

let colorsTop = ["#ffbe90", "#914297", "#d44a4c", "#07e2ff"]



let colors2 = ["#6eb1fe", "#b96690", "#000000", "#13e0e0"];

let colorsBottom2 = ["#578ac5", "#804964", "#930709", "#00c6c6"]

let colorsTop2 = ["#9dc4f1", "#b57d99", "#d44a4c", "#beffff"]



let yColor1 = document.querySelectorAll('.y-color1');

let yColor2 = document.querySelectorAll('.y-color2');

let yBcolor = document.querySelectorAll('.y-Bcolor')

let yBcolor2 = document.querySelectorAll('.y-Bcolor2')

let buyButton = document.querySelectorAll('.y-buy__button')

let demoButton = document.querySelectorAll('.y-demo__button')

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

function colorChangeBorderMain() {
    yBcolor.forEach(element => {
        element.style.borderColor = colors[currentIndex];
    });
    
}
function colorChangeBorderMain2() {
    yBcolor2.forEach(element => {
        element.style.borderColor = colors2[currentIndex];
    });
}

function buyButtonColor1() {
    buyButton.forEach(element => {
        element.style.backgroundColor = colors[currentIndex]
        element.style.borderTop = `8px solid ${colorsTop[currentIndex]}`
        element.style.borderBottom = `8px solid ${colorsBottom[currentIndex]}`

    });
}
function buyButtonColor2() {
    demoButton.forEach(element => {
        element.style.backgroundColor = colors2[currentIndex]
        element.style.borderTop = `8px solid ${colorsTop2[currentIndex]}`
        element.style.borderBottom = `8px solid ${colorsBottom2[currentIndex]}`

    });
}

function buttonChange() {
    demoButton.forEach(element => {
        if (currentIndex === 2) {
            element.style.backgroundColor = "#d30308"
        }
    })
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
    colorChangeBorderMain()
    colorChangeBorderMain2()
    buyButtonColor1()
    buyButtonColor2()
    buttonChange()
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