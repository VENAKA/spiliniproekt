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


    let arey = [
        {
            name: 'gameplay',
            oter: 'game'
        },
        {
            name: 'factions',
            oter: 'fact'
        },
        {
            name: 'donation',
            oter: 'donat'
        }
    ]
    
    let searchInput = document.querySelector('.v-header__input');
searchInput.addEventListener('keydown', function(event){
    if(event.key === 'Enter'){
        console.log(123);
        let searchInputValue = searchInput.value;
        
        let filteredItems = arey.filter(item => 
            item.name.includes(searchInputValue) || 
            item.oter.includes(searchInputValue)
        );
        
        if (filteredItems.length > 0) {
            let firstItem = filteredItems[0];
            if (firstItem.name === 'gameplay' && firstItem.oter === 'game') {
                document.getElementById('game').scrollIntoView({ behavior: 'smooth' });
            } else if (firstItem.name === 'factions' && firstItem.oter === 'fact') {
                document.getElementById('fact').scrollIntoView({ behavior: 'smooth' });
            } else if (firstItem.name === 'donation' && firstItem.oter === 'donat') {
                document.getElementById('donat').scrollIntoView({ behavior: 'smooth' });
            }
        }
    }
});



let burgerModal = document.querySelector('.v-header__burger-modal');
let burgers = document.querySelector('.v-header__burger');

burgers.forEach(burger => {
    burger.addEventListener('click', function() {
        burgerModal.classList.toggle('newmodal');
    });
});





