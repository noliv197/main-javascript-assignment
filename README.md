# :black_circle: :scroll: :scissors: Game Assignment :black_circle: :scroll: :scissors:

## Table of contents
- [Instructions](#instructions)
- [Logic](#logic)
- [Group](#group)

## Instructions 
<ol>
  <li><p>Create a blank HTML document with a script tag (Hint: it is best practice to link an
external .js file). This game is going to be played completely from the console, so don’t
worry about putting anything else in there.</p></li>
  <li><p>Your game is going to play against the computer, so begin with a function called
computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this
function in the game to make the computer’s play. Tip: use the console to make sure this
    is returning the expected output before moving to the next step!</p></li>
  <li><p>Write a function that plays a single round of Rock Paper Scissors. The function should
take two parameters - the playerSelection and computerSelection - and then return a
string that declares the winner of the round like so: "You Lose! Paper beats Rock"
i. Make your function’s playerSelection parameter case-insensitive (so users can
input rock, ROCK, RocK or any other variation). (<a href="https://gomakethings.com/converting-strings-to-uppercase-and-lowercase-with-vanilla-javascript/" target="_blank">Here’s</a> a tip on how to do that)</p></li>
  <li>
    <p>Important note: you want to return the results of this function call, not console.log()
them. You’re going to use what you return later on, so let’s test this function by using
console.log to see the results:</p>
    <img width="552" alt="Screenshot 2023-03-07 at 11 30 14" src="https://user-images.githubusercontent.com/32480112/223396454-44d61b3a-d33a-446c-b4ba-397b138588aa.png">
  </li>
  <li>
    <p>Write a NEW function called game(). Call the playRound function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.</p>
    <ol>
      <li>
        <p><a href="https://www.youtube.com/watch?v=s9wW2PpJsmQ" target="_blank">Remember loops?</a> This is a great opportunity to use one to play those five rounds:</p>
        <img width="417" alt="Screenshot 2023-03-07 at 11 29 45" src="https://user-images.githubusercontent.com/32480112/223396575-bc218852-7a69-40ed-b80a-6f2bdaa0ee49.png">
      </li>
      <li>At this point you should be using console.log() to display the results of each round and the winner at the end.</li>
      <li>Use prompt() to get input from the user. <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt" target="_blank">Read the docs here.</a></li>
      <li> Feel free to re-work your previous functions if you need to. Specifically, you
      might want to change the return value to something more useful.
      </li>
  </li>
</ol>


## Logic

![js-assignment-flowchart](https://user-images.githubusercontent.com/32480112/223684788-aa7b4f3c-be10-44e1-80d7-aedfd901d545.png)

## Group
|David Ghizzi|Natalia Oliveira|Sharon Ettinger|
|------------|----------------|---------------|
|<img src="https://github.com/daveiho.png" alt="David github profile" width="100">|<img src="https://github.com/noliv197.png" alt="Natalia github profile" width="100">|<img src="https://github.com/SharonEttinger.png" alt="Sharon github profile" width="100">|
|[@daveiho](https://github.com/daveiho)|[@noliv197](https://github.com/noliv197)|[@SharonEttinger](https://github.com/SharonEttinger)|
