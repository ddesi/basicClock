//you get the date for today
// $(document).ready(function(){
// setInterval(function () {
// 	var today = new Date()
// 	console.log(today)
// }, 2000)
// })
//function for get today s day
// $(document).ready(function(){
// setInterval(function () {
// 	var today = new Date()
// 	console.log(today.getDay())
// }, 2000)
// })
//get the seconds
// $(document).ready(function(){
// setInterval(function () {
// 	var today = new Date()
// 	console.log(today.getSeconds())
// }, 2000)
// })
//if i continuosly do it i kinda have a small clock

$(document).ready(function(){
	function displayClock (){
		//now i need to set the variables for the time
		var today = new Date()
		//and get the data that i need
		var h = today.getHours()
		var m = today.getMinutes()
		var s = today.getSeconds()
		var ms = today.getMilliseconds()
		//i want to show a zero if there's only one digit
		m=checkTime(m);
		s=checkTime(s);
		//now i create a div and set its id to display clock
		document.getElementById('clock').innerHTML = h + " : " + m + " : " + s + " : " + ms
		//let's display it after like half a sec from page load
		var timer = setTimeout(displayClock, 1000)
	}
	//add a zero
	function checkTime(x){
	if (x<10) {x="0" + x;} return x;
  	}
  	displayClock()
})