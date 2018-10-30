
// global variables taken out of HTML doc

var minEntry = document.querySelector('#user-min-range-input')
var maxEntry = document.querySelector('#user-max-range-input');
var updateNumbers = document.querySelector('.update-button');
var guessSubmit = document.querySelector('.submit-button');
var guessFieldInput = document.querySelector('#guess-field');
var clearButton = document.querySelector('.clear-button');
var resetButton = document.querySelector('.reset-button');
var updatedMinRange = document.querySelector('.min-entry-current-range');
var updatedMaxRange = document.querySelector('.max-entry-current-range');
var randomNumber;


// event listeners

clearButton.addEventListener('click', guessFieldEmpty);
guessFieldInput.addEventListener('keyup', enableClearReset);
guessSubmit.addEventListener('click', checkGuess);
resetButton.addEventListener('click', guessFieldEmpty);
resetButton.addEventListener('click', resetGame);
updateNumbers.addEventListener('click', inputRangeCheck);
updateNumbers.addEventListener('click', isEmpty);


updateNumbers.addEventListener('click', function(e) {
  e.preventDefault();
  var min = parseInt(minEntry.value, 10);
  var max = parseInt(maxEntry.value, 10);
  randomNumber = Math.floor(Math.random() * max) + min;
  console.log(randomNumber);
  replaceMinMaxRange();
  inputsErrorMessage();
});

// functions

function guessFieldEmpty() {
  guessFieldInput.value = "";
}

function enableClearReset() {
  if(guessFieldInput.value !== ""){
  clearButton.removeAttribute('disabled');  
  resetButton.removeAttribute('disabled');
  }
}

function resetGame() {
  minEntry.value = "";
  maxEntry.value = "";
  guessFieldEmpty();
  updatedMinRange.innerText = 1;
  updatedMaxRange.innerText = 100;
  randomNumber = Math.floor(Math.random() * 100) + 1;
}

function replaceMinMaxRange() {
  document.querySelector('.min-entry-current-range').innerText = minEntry.value;
  document.querySelector('.max-entry-current-range').innerText = maxEntry.value;
}

function inputsErrorMessage() {
  if(minEntry.value === "") {
    document.querySelector('.min-error-message').innerHTML = `<i class="fas fa-exclamation-triangle"></i> Enter a min range`;
    minEntry.style.border = "1px solid #DD1972";
  } else { 
    minEntry.style.border = "none"; 
    document.querySelector('.min-error-message').innerHTML = "";
  }

  if(maxEntry.value === "") {
    document.querySelector('.max-error-message').innerHTML = `<i class="fas fa-exclamation-triangle"></i> Enter a max range`;
    maxEntry.style.border = "1px solid #DD1972";
  } else { 
  maxEntry.style.border = "none";
    document.querySelector('.max-error-message').innerHTML = "";
  }
};

function increaseDecreaseByTen() {
  maxEntry.value = ((parseInt(maxEntry.value)) +10);
  minEntry.value = ((parseInt(minEntry.value)) -10);
  }

function isEmpty(e) {
  e.preventDefault();
  var feedBackText = document.querySelector('.feedback-text');
  if(minEntry.value === "" || maxEntry.value === "") {
  return feedBackText.innerText = "Please enter a guess";
    }
  }

  function inputRangeCheck(e) {
    e.preventDefault();
    var minEntryInput = parseInt(minEntry.value);
    var maxEntryInput = parseInt(maxEntry.value);
    var feedBackText = document.querySelector('.feedback-text');
    if(minEntryInput > maxEntryInput || maxEntryInput < minEntryInput) {
    return feedBackText.innerText = "Error, try again";
  }
  }

  function checkResetandClearButtons() {
    clearButton.classList.add(disabled);
    resetButton.classList.add(disabled);
  }

function checkGuess(e) {
  e.preventDefault();
  var userGuess = parseInt(guessFieldInput.value, 10);
  var displayGuess = document.querySelector('.number-displayed');
  var feedBack = document.querySelector('.feedback-text');
  var minEntryTest = parseInt(minEntry.value);
  var maxEntryTest = parseInt(maxEntry.value);
  displayGuess.innerText = userGuess;
  if (userGuess < minEntryTest || userGuess > maxEntryTest) {
  return feedBack.innerText = "That is outside of the range, try again"; 
  } else if (userGuess < randomNumber) {
    return feedBack.innerText = 'Sorry, thats too low';
  } else if(userGuess > randomNumber) {
    return feedBack.innerText = 'Sorry, thats too high';
  } else if (userGuess === randomNumber) {
    increaseDecreaseByTen();
      return feedBack.innerText = 'Boom!';
  } else {
      return feedBack.innerText = 'Please enter a guess';
  }
}



