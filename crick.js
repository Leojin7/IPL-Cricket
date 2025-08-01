// fucntion to update the Score


function updateScore(scoreId, increment) {
    const scoreElement = document.getElementById(scoreId);
    let currentScore = parseInt(scoreElement.innerText);
    

    currentScore += increment;

      if (currentScore < 0) currentScore = 0;

    scoreElement.innerText = currentScore;

   
    updateMatchInfo();
}


// function to updatMtahc info
function updateMatchInfo() {
    const oversElement = document.getElementById("overs");
    
 
    let currentOvers = parseFloat(oversElement.innerText) + 0.1; 
   
 

   if (currentOvers > 20) currentOvers = 20;

   oversElement.innerText = currentOvers.toFixed(1);
}
