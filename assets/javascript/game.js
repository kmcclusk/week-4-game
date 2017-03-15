$(document).ready(function(){

var random = Math.floor(Math.random() * 101 + 19);
$("#guessNumber").text(random);

var record1 = Math.floor(Math.random() * 3 + 7);
var record2 = Math.floor(Math.random() * 3 + 4);
var record3 = Math.floor(Math.random() * 3 + 1);
var record4 = Math.floor(Math.random() * 3 + 10);

var counter = 0;
var wins = 0;
var losses = 0;

$("#wins").text("wins " + wins);
$("#losses").text("losses " + losses);
$(".score").text(counter);

function newNumber(){
	random = Math.floor(Math.random() * 101 + 19);
	$("#guessNumber").text(random);
	record1 = Math.floor(Math.random() * 3 + 7);
	record2 = Math.floor(Math.random() * 3 + 4);
	record3 = Math.floor(Math.random() * 3 + 1); 
	record4 = Math.floor(Math.random() * 3 + 10);
	counter = 0;
	$(".score").text(counter);
}

function reset(){
	newNumber();
	wins = 0;
	losses = 0;
	$("#wins").text("wins " + wins);
	$("#losses").text("losses " + losses);
}

function winner(){
	wins++;
	$(".score").text("YOU WIN");
	$("#wins").text("wins " + wins);
	$("#losses").text("losses " + losses);
	newNumber();
}

function loser() {
	losses++;
	$(".score").text("YIKES");
	$("#wins").text("wins " + wins);
	$("#losses").text("losses " + losses);
	newNumber();
}

$("#record-1").on("click", function() {
	counter += record1;
	$(".score").text(counter);
	$("#record-1").addClass("rotate");

		if (counter === random){
			winner();
		} else if (counter > random) {
			loser();
		}
});
	
$("#record-2").on("click", function() {
	counter += record2;
	$(".score").text(counter);
	$("#record-2").addClass("rotate");

		if (counter === random){
			winner();
		} else if (counter > random) {
			loser();
		}
});

$("#record-3").on("click", function() {
	counter += record3;
	$(".score").text(counter);
	$("#record-3").addClass("rotate");

		if (counter === random){
			winner();
		} else if (counter > random) {
			loser();
		}
});

$("#record-4").on("click", function() {
	counter += record4;
	$(".score").text(counter);
	$("#record-4").addClass("rotate");

		if (counter === random){
			winner();
		} else if (counter > random) {
			loser();
		}
});

$(".btn").on("click", function() {
	reset();
});

});