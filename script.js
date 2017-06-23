var $textInput = $("#textInput"),
    $button = $("#doAction"),
    $display = $("#display");
    $options = $("input[type=radio]");
    method = "reverse";
		
$options.on("click", function() {
	method = $(this).val();/*this is just assign a value to the button being clicked */
	
	
}	)


$button.on("click", function() {
       let word = $textInput.val();
	switch(method) {
    
		case "Random":
  let randomisedWord = word.split("").sort(function(a, b) {
		return 0.5 - Math.random()
	});
   $display.text(randomisedWord.join(""));
        break;
			
    case "Alphabetize":
  let alphabetizedWord = word.split("").reverse().join("");
   $display.text(alphabetizedWord);
        break;
    
		case "Reverse":
   let reversedWord = word.split("").reverse().join("");
   $display.text(reversedWord);
break;
}});
  
 





