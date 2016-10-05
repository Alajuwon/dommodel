var calculatorButton = document.getElementById("calculate-button");
var answer = document.getElementById("answer");

var calculate = function() {
	var inputOne = document.getElementById("value-one");
	var inputTwo = document.getElementById("value-two");
	var sum = Number(inputOne.value) + Number(inputTwo.value);
	event.preventDefault();
	console.log(sum);
	answer.innerHTML=sum
	return sum;
};

	// var inputOne=Number(inputOne.value);
	// var inputTwo=Number(inputTwo.value);
	// var sum = (inputOne + inputTwo);

	// answer.innerHTMl=sum 



calculatorButton.addEventListener("click", calculate);