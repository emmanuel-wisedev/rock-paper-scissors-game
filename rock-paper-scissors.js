
    // Algorithm for (Rock Paper scissors)
    // When we click a button:
    // 1. Computer randomly selects a move
    // 2. Compare the moves to get the result
    // 3. Update a score - (now we save the result in a new variable)
    // 4. Displays the result and score in a popup


    // accessing the value in the (localStorage)
    let score = JSON.parse(localStorage.getItem('score'));

    /*
    this is also a shortcut to write the code above by using the ( Default Operator || ) , which means, if score does not exist or score === null, then use the default value of the code below instead

    let score = JSON.parse(localStorage.getItem('score')) || {
      wins: 0,
      loses: 0,
      ties: 0,
    };
    */

    
    if (score === null) {

      // null means, something does not exist. So the shortcut to write the line of code above is (!score) => (NotScore), it means if score does not exist which is (null), then use the default value below, which is the code that follows below

     score = {
      wins: 0,
      losses: 0,
      ties: 0,
     };
    }

    updateScore();

    function playGame(playerMove) {
      const computerMove = pickComputerMove();

      let result = '';

      if (playerMove === 'scissors') {
        if (computerMove === 'rock') {
          result = 'You lose.';
        } else if (computerMove === 'paper') {
          result = 'You win.';
        } else if (computerMove === 'scissors') {
          result = 'Tie.'
        }
        
      } else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
          result = 'You win.';
        } else if (computerMove === 'paper') {
          result = 'Tie.';
        } else if (computerMove === 'scissors') {
          result = 'You lose.'
        }

      } else if (playerMove === 'rock') {
        if (computerMove === 'rock') {
          result = 'Tie.';
        } else if (computerMove === 'paper') {
          result = 'You lose.';
        } else if (computerMove === 'scissors') {
          result = 'You win.'
        }
      } 


      // so this is how we increase the wins property in the score object by 1
      if (result === 'You win.') {

        // this is another way of writing the same code to increase the score wins
        // score.wins = score.wins + 1;

        score.wins += 1;
      } else if (result === 'You lose.') {
        score.losses += 1;
      } else if (result === 'Tie.') {
        score.ties += 1;
      }

      // saving the score to (localStorage) 
      localStorage.setItem('score', JSON.stringify(score));

      updateScore();
      
      document.querySelector('.js-result').innerHTML = `${result}`

      document.querySelector('.js-moves').innerHTML = `You
    <img src="./rock-paper-scissors-icons/${playerMove}-emoji.png" class="move-icon">
    <img src="./rock-paper-scissors-icons/${computerMove}-emoji.png" class="move-icon">
    Computer`;
    }

    function updateScore() {
      document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
    }

    function pickComputerMove() {
      const randomNumber = Math.random();

      let computerMove = '';

      if (randomNumber >= 0 && randomNumber < 1/3) {
        computerMove = 'rock';
      } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
        computerMove = 'paper';
      } else if (randomNumber >= 2/3 && randomNumber < 1) {
        computerMove = 'scissors';
      }

      return computerMove;
    }