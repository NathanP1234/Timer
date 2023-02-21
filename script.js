var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');

function countdown() {
  var sec = 5;
  var timer = setInterval(function(){
    document.getElementById('main').innerHTML=sec;
    sec--;
    if (sec < 0) {
        clearInterval(timer);
        myTimer();
    }
  }, 1000);
};


  function myTimer() {

};

startBtn.onclick = countdown;