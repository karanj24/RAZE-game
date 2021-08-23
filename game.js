let score = 0;


document.onkeydown = function (e) {
    console.log("Key code is: ", e.key)
    if (e.key == "ArrowUp") {
        player = document.querySelector('.player');
        player.classList.add('jumping');
        setTimeout(() => {
            player.classList.remove('jumping')
        }, 1500);
    }
}    

    setInterval(() => {
        player = document.querySelector('.player');
        enemy = document.querySelector(".enemy");
        gameOver = document.querySelector(".gameOver");
        tomato = document.querySelector(".tomato");
        cheese = document.querySelector(".cheese");
        karela = document.querySelector(".karela");
        score1 = document.getElementById("score");
    
        px = parseInt(window.getComputedStyle(player, null).getPropertyValue('left'));
        py = parseInt(window.getComputedStyle(player, null).getPropertyValue('bottom'));
    
        ex = parseInt(window.getComputedStyle(enemy, null).getPropertyValue('left'));
        ey = parseInt(window.getComputedStyle(enemy, null).getPropertyValue('bottom'));
        
        tx = parseInt(window.getComputedStyle(tomato, null).getPropertyValue('left'));
        ty = parseInt(window.getComputedStyle(tomato, null).getPropertyValue('bottom'));

        cx = parseInt(window.getComputedStyle(cheese, null).getPropertyValue('left'));
        cy = parseInt(window.getComputedStyle(cheese, null).getPropertyValue('bottom'));
        
        kx = parseInt(window.getComputedStyle(karela, null).getPropertyValue('left'));
        ky = parseInt(window.getComputedStyle(karela, null).getPropertyValue('bottom'));
        

        offsetX = Math.abs(px-ex);
        offsetY = Math.abs(py-ey);

        offsetXt = Math.abs(px-tx);
        offsetXc = Math.abs(px-cx);
        offsetXk = Math.abs(px-kx);

        console.log(offsetX);
    
        if(offsetX <= 60 && offsetY <= 60){
            gameOver.style.visibility = 'visible';
            player.remove();
        }
        else{
            score = score + 1;
        }
        
        if(offsetXt <= 60 && offsetY <= 60){
            tomato.style.visibility = 'hidden';
            score = score + 50;
        }

        else if(offsetXc <= 60 && offsetY <= 60){
            cheese.style.visibility = 'hidden';
            score = score + 100;

        }
        else if(offsetXk <= 60 && offsetY <= 60){
            karela.style.visibility = 'hidden';
            score = 0;
        }
        score1.innerHTML = "Your Score: " + parseInt(score/100);
    }, 100);

    setInterval(() => {
        tomato.classList.add('foodAnimation');
        setTimeout(() => {
            tomato.classList.remove('foodAnimation');
            tomato.style.visibility = 'visible';
        }, 9500);
    }, 10000);

    setInterval(() => {
        cheese.classList.add('foodAnimation');
        setTimeout(() => {
            cheese.classList.remove('foodAnimation');
            cheese.style.visibility = 'visible';
        }, 9500);
    }, 29000);

    setInterval(() => {
        karela.classList.add('foodAnimation');
        setTimeout(() => {
            karela.classList.remove('foodAnimation');
            karela.style.visibility = 'visible';
        }, 9500);
    }, 13000);

    
