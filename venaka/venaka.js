let currentSlide = 0;

function showSlide(index) {
    let slides = document.querySelector('.slides');
    let totalSlides = document.querySelectorAll('.slide').length;

    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }

    let offset = -currentSlide * 100;
    slides.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

setInterval(nextSlide, 100000);


let btn = document.querySelectorAll('.modal')



let modalTento = document.querySelector('.v-Tenno-Warframes_modal');
    let buttons = document.querySelectorAll('.modal');

    btn.forEach(button => {
        button.addEventListener('click', function() {
            modalTento.classList.toggle('newmod');
        });
    });








