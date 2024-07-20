let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;

    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }

    const offset = -currentSlide * 100;
    slides.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

setInterval(nextSlide, 10000);


let btn = document.querySelectorAll('.modal')



let modalTento = document.querySelector('.v-Tenno-Warframes_modal');
    let buttons = document.querySelectorAll('.modal');

    btn.forEach(button => {
        button.addEventListener('click', function() {
            modalTento.classList.toggle('newmod');
        });
    });

let card = document.querySelectorAll('.card')

document.addEventListener('click',function(){
    cardValue = card.value
    if(cardValue === cardValue){
        window.location.href = 'https://www.warframe.com/uk/buyplatinum'
    }
})

let headerGoHome = document.getElementById('Hom')

document.addEventListener('click',function(){
    headerGoHomeValue = headerGoHome.value
    if(headerGoHomeValue === headerGoHomeValue){
        window.location.href = '../'
    }
})

let headerGoYarik = document.getElementById('Cel')

document.addEventListener('click',function(){
    headerGoYarikValue = headerGoYarik.value
    if(headerGoYarikValue === headerGoYarikValue){
        window.location.href = '../'
    }
})

let headerGoGreg = document.getElementById('Hor')

document.addEventListener('click',function(){
    headerGoGregValue = headerGoGreg.value
    if(headerGoGregValue === headerGoGregValue){
        window.location.href = '../'
    }
})




