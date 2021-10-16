var hr = 0;
var min = 0;
var sec = 0;
var timer = false;
function start() {
  timer = true;
  stopwatch();
  document.getElementById("start").disabled = true;
  document.getElementById("pause").disabled = false;
  document.getElementById("reset").disabled = false;
} 
function change(){
    if(timer==true){
        pause();
    }else{
        resume();
    }
}
function pause() {
  timer = false;
  document.getElementById("pause").innerHTML = "Continue";
}
function resume(){
    start();
    document.getElementById("pause").innerHTML = 'Pause';
}
function reset() {
  timer = false;
  hr = 0;
  min = 0;
  sec = 0;
  document.getElementById("hour").innerHTML = "00";
  document.getElementById("minute").innerHTML = "00";
  document.getElementById("second").innerHTML = "00";
  document.getElementById("start").disabled = false;
  document.getElementById("pause").disabled = true;
  document.getElementById("reset").disabled = true;
  document.getElementById("pause").innerHTML = 'Pause';
  
}
function stopwatch() {
  if (timer == true) {
    sec = sec + 1;

    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }
    if (min == 60) {
      hr = hr + 1;
      min = 0;
      sec = 0;
    }
    var hrString = hr;
    var minString = min;
    var secString = sec;

    if (hr < 10) {
      hrString = "0" + hrString;
    }
    if (min < 10) {
      minString = "0" + minString;
    }
    if (sec < 10) {
      secString = "0" + secString;
    }

    document.getElementById("hour").innerHTML = hrString;
    document.getElementById("minute").innerHTML = minString;
    document.getElementById("second").innerHTML = secString;
    setTimeout("stopwatch()", 1000);
  }
}
