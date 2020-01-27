document.addEventListener("DOMContentLoaded", function() {
  CurrentTime();
}); 


function CurrentTime() {
  var date = new Date();
  var hour = date.getHours() > 9 ? date.getHours() : "0" + date.getHours();
  var minute = date.getMinutes() > 9 ? date.getMinutes() : "0" + date.getMinutes();
  var seconds = date.getSeconds() > 9 ? date.getSeconds() : "0" + date.getSeconds();
  var result = hour + ":" + minute + ":" + seconds; 
  document.getElementById("time").innerHTML = "Time now" + " " +result;

}

window.setInterval(CurrentTime, 1000);