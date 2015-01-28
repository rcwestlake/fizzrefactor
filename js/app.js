$(document).ready(function() {
	var userInput = prompt("Please select a number between 1 and 100.");

	if (userInput % 1 != 0) {
		alert("Hold your horses! Please enter a whole number - no decimals.");
	}

	var userNum = function(number) {
		for (var num = 1; num <= userInput; num++) {
			if (num % 3 == 0 && num % 5 == 0) {
				$('#fizzylist ul').append("<li> FIZZBUZZ </li>");
			}	
			else if (num % 3 == 0) {
				$('#fizzylist ul').append("<li> fizz </li>");
			}
			else if (num % 5 == 0) {
				$('#fizzylist ul').append("<li> buzz </li>");
			}
			else {
				$('#fizzylist ul').append("<li>" + num + "</li>");
			}
		}	

	}

	userNum(userInput)




}); //$(document).ready(function) end line
