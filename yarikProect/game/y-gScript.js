
let yPlayer = document.querySelector('.y-player');
let straw = document.querySelector('.strawberry')
let winEkan = document.querySelector('.y-win')
let position = 120; 
let positionY = 547; 
let scoreR = 0;
let scoreL = 0;
let scoreU = 0;
let score = 0;

function surface() {
    if (position >= -50 && position <= 430) {
        return 547;
    }
    else if (position >= 431 && position <= 660) {
        return 471;
    }
    else if (position >= 661 && position <= 815) {
        return 700;
    }
    else if (position >= 816 && position <= 920) {
        if (positionY <= 187) {
            return 169;
        }
        else {
            return 584;
        }
    }
    
    else if (position >= 921 && position <= 1049) {
        if (position <= 955 && positionY <= 187) {
            return 169;
        }
        else {
            return 471;
        }

    }
    else if (position >= 1050 && position <= 1075) {
        return 546.5;
    }
    else if (position >= 1080 && position <= 1159) {
        return 700;
    }
    else if (position >= 1160 && position <= 1440) {
        return 357;
    }
    else {
        return 700;
    }
} 

function StopPlayer() {
    if (key === 'ArrowLeft') {
        position += 15; 
    }
    if (key === 'ArrowRight') {
        position -= 15; 
    }
    if (key === ' ') {
        positionY += 220;
    }
}
function resetPlayer() {
    position = 120; // Возвращаем начальную позицию по оси X
    positionY = 547; // Начальная позиция по оси Y
    yPlayer.style.left = position + 'px';
    yPlayer.style.top = positionY + 'px';
    scoreR = 0;
    scoreL = 0;
    score = 0;
}

function playerFall() {
    let targetY = surface();
    if (targetY > positionY) {
        let fallInterval = setInterval(() => {
            if (positionY >= targetY) {
                clearInterval(fallInterval);
            } else {
                positionY += 5; // Скорость падения
                yPlayer.style.top = positionY + 'px';
            }
        }, 20);
    }
}

document.addEventListener('keydown', (event) => {
    let key = event.key;

    if (key === 'ArrowLeft') {
        yPlayer.style.transition = '0.1s'
        yPlayer.style.transform = 'scaleX(-1)'
        scoreL += 1;
        scoreU = 0;
        score = scoreL;
        position -= 15; 
        if (position <= -1) {
            position += 15;
        } 
    } 
    if (key === 'ArrowRight') {
        scoreR += 1;
        score = scoreR;
        position += 15; 
        scoreU = 0;
        yPlayer.style.transition = '0.1s'
        yPlayer.style.transform = 'scaleX(1)'
        if (position >= 1411) {
            position -= 15;
        } 
    }
    if (key === 'ArrowUp') {
        scoreR = 0
        scoreL = 0
        scoreU += 1
    }
    if (key === ' ') {
        yPlayer.style.transition = '0.1s'
        if(positionY === surface()) {
            if (scoreR > 0) {
                score = 0
                position += 220;
                positionY -= 220;
            }
            if (scoreL > 0) { 
                score = 0
                position -= 220;
                positionY -= 220;
            }
            if (scoreU > 0) {
                positionY -= 250;
            }
        }
        else {
        }
    }


    if (position >= 865 && position <= 910 && positionY <= 0) {
        winEkan.style.backgroundColor = '#000000ac'
        winEkan.style.fontSize = '200px'
        straw.style.opacity = '0%'
    }



    yPlayer.style.left = position + 'px';
    yPlayer.style.top = positionY + 'px';

    if (surface() > positionY) {
        playerFall();
    }

    if (positionY >= 700 ) {
        resetPlayer();
    }

    if (surface() < positionY) {
        positionY = surface()
    }

    console.log('score - ', score);
    console.log('scoreL - ', scoreL);
    console.log('scoreR - ', scoreR);
    console.log('scoreU - ', scoreU);
    console.log('surface - ', surface());
    console.log('positionX - ', position);
    console.log('positionY - ', positionY);
    console.log('');
});
document.addEventListener('keydown', (event) => {
    let key = event.key;
    if (key === 'ArrowRight' && scoreL > 0) {
        scoreL = 0;
    } 
    else if (key === 'ArrowLeft' && scoreR > 0) {
        scoreR = 0;
    }
});

