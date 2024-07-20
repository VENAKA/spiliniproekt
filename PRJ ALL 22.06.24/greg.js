



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




    for(let i = 0; i<modalBtn.length; i++){
        modalBtn[i].addEventListener('click' , function(){
            modal.classList.add('modOpen')
        })
    }


modalClose.addEventListener('click' , function(){
    if(modalClose = true){
        modal.classList.remove('modOpen')
    }
})