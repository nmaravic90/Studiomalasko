var count = new Date("Jan 1, 2023 00:00:00").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var d = count - now;

  var days = Math.floor(d/(1000*60*60*24));
  var hours = Math.floor((d%(1000*60*60*24))/(1000*60*60));
  var minutes = Math.floor((d%(1000*60*60))/(1000*60));
  var seconds = Math.floor((d%(1000*60))/1000);

  document.getElementById('d').innerHTML = days;
  document.getElementById('h').innerHTML = hours;
  document.getElementById('m').innerHTML = minutes;
  document.getElementById('s').innerHTML = seconds;

  if(d <= 0){
    clearInterval(x);
  }
},1000);
