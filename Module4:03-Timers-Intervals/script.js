var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById ('main');

var message =
'Some say the worls will end in , some say in ice From what I,ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. And would suffice.';
var words = message.split(' ');

function countdown (){
    var timeLeft = 5;

    var timeInterval = setInterval (function(){
        if(timeLeft > 1){
            timerEl.textContent = timeLeft + 'seconds remaining';
            timeLeft --;
        } else if (timeLeft === 1){
            timerEl.textContent =timeLeft + 'second remaining';
            timeLeft --;
        } else {
            timerEl.textContent='';
            clearInterval(timeInterval);
            displayMessage();
        }
    },1000);
}

function displayMessage(){
    var wordCount = 0;

    var msgInterval = setInterval(function(){
        if (words[wordCount] === undefined){
            clearInterval(msgInterval);
        } else {
            mainEl.textContent = words[wordCount];
            wordCount++;
        }
    }, 1000);
}

countdown();