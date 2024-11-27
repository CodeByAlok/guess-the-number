let randomNumber = Math.floor(Math.random() * 100) + 1;
const reset = document.getElementById("reset");
const btn = document.getElementById("btn");
const userInput = document.getElementById("inputNumber");
const feedback = document.getElementById("feedback");


btn.addEventListener("click", ()=>{
    const userGuess = Number(userInput.value);

    if(!userGuess || userGuess < 1 || userGuess > 100) {
        feedback.textContent = 'Please enter a valid number between 1 and 100.';
        feedback.style,color = "red";
        return;
    }


    if(userGuess < randomNumber){
        feedback.textContent = 'Too Low! Try again.';
        feedback.style.color = 'orange';

    }
    else if(userGuess === randomNumber){
        feedback.textContent = '🎉 Congratulations! You guessed the correct number!';
        feedback.style.color = 'green';
    }
    else{
        feedback.textContent = 'Too High! Try again.';
        feedback.style.color = 'orange';

    }
});


reset.addEventListener("click", () => {
    randomNumber = Math.floor(Math.random() * 100) + 1; // Generate a new random number
    feedback.textContent = ''; // Clear feedback text
    userInput.value = ''; // Clear input field
    feedback.style.color = 'black'; // Reset feedback color
});

