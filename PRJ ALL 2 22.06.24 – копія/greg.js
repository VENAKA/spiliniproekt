



window.addEventListener('scroll' , function(){
    let moveElem = document.querySelector('.g_person-img')

    if(this.scrollY > 600) {
        moveElem.classList.add('open1')
    }
    else{
        moveElem.classList.remove('open1')
    }
})

window.addEventListener('scroll' , function(){
    let moveElem2 = document.querySelector('.g_person-img2')

    if(this.scrollY > 700) {
        moveElem2.classList.add('open2')
    }
    else{
        moveElem2.classList.remove('open2')
    }
})



//MODALS




let modal = document.querySelector('.g_modal')
let modalBtn = document.querySelectorAll('.g_plan-btn')
let modalClose = document.querySelector('.g_close-modal')
let modalTrue = document.querySelector('.g_modal-true')
let trueBtn = document.querySelector('.g_true-btn')
let modalFalse = document.querySelector('.g_modal-false')
let falseBtn = document.querySelector('.g_false-btn ')


for(let i = 0; i<modalBtn.length; i++){
    modalBtn[i].addEventListener( 'click' , function(){
        modal.classList.add('modOpen')
    })
}



let intEmail = document.querySelector('.g_modal-email')
let intCard = document.querySelector('.g_modal-card')



modalClose.addEventListener('click' , function(){
    let intEmailValue = intEmail.value
    let intCardValue = intCard.value

    if (intEmailValue.length > 5 && intEmailValue.includes("@") && intEmailValue.includes(".") && intCardValue.length > 15) 
        {
        intEmail.classList.add("true");
        intEmail.classList.remove("false");

        intCard.classList.add("true");
        intCard.classList.remove("false");

        modal.classList.remove('modOpen')
        modalTrue.classList.add('openTrue')
        setTimeout(() => {
            modalTrue.classList.remove('openTrue')
        }, 2700)
        } 
    else if (intEmail === '' && intCard === '' ) {
        intEmail.classList.remove("false");
        intEmail.classList.remove("true");

        intCard.classList.remove("false");
        intCard.classList.remove("true");

        modalTrue.classList.remove('openTrue')
        modalFalse.classList.remove('openFalse')
        } 

    else {
        intEmail.classList.remove("true");
        intEmail.classList.add("false");

        intCard.classList.remove("true");
        intCard.classList.add("false");

        modal.classList.remove('modOpen')

        modalFalse.classList.add('openFalse')
        setTimeout(() => {
            modalFalse.classList.remove('openFalse')
        }, 2700)
        }
})




intEmail.addEventListener("input", function () {
    let intEmailValue = intEmail.value

    if (intEmailValue.length > 5 && intEmailValue.includes("@") && intEmailValue.includes(".")) 
        {
        intEmail === true
        intEmail.classList.add("true");
        intEmail.classList.remove("false");
        } 
    else if (intEmailValue.length === 0) {
        intEmail.classList.remove("false");
        intEmail.classList.remove("true");
        } 

    else {
        intEmail.classList.remove("true");
        intEmail.classList.add("false");
        }
});


intCard.addEventListener("input", function () {
    let intCardValue = intCard.value

    if (intCardValue.length > 15) 
        {
        intCard.classList.add("true");
        intCard.classList.remove("false");
        } 
    else if (intCardValue.length === 0) {
        intCard.classList.remove("false");
        intCard.classList.remove("true");
        } 

    else {
        intCard.classList.remove("true");
        intCard.classList.add("false");
        }
});



let headerModal = document.querySelector('.g_header-modal')
let headerBtn = document.querySelector('.g_header-menu')
let btnHeraderClose = document.querySelector('.g_mod-back-btn')

headerBtn.addEventListener('click' , function(){
    if(headerBtn === headerBtn){
        headerModal.classList.add("headerOpen")
    }
})

btnHeraderClose.addEventListener('click' , function(){
    if(btnHeraderClose === btnHeraderClose){
        headerModal.classList.remove("headerOpen")
    }
})





let skidkaBtn = document.querySelector('.g_header-btn')

skidkaBtn.addEventListener('click' , function(){
    if(skidkaBtn === skidkaBtn){
        alert('Ви отримали знижку в ' + Math.floor(Math.random() * 90) + " %")
    }
})