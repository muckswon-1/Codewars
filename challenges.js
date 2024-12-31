/**
 * CHALLENGE 1
 * 
 * Greed is a dice game played with five six-sided dice. 
 * Your mission, should you choose to accept it, is to score a throw according to these rules. 
 * You will always be given an array with five six-sided dice values.
 * 
 * ********************************************************************************************
 *  RULES
 * ********************************************************************************************
 * 
 *  Three 1's => 1000 points
    Three 6's =>  600 points
    Three 5's =>  500 points
    Three 4's =>  400 points
    Three 3's =>  300 points
    Three 2's =>  200 points
    One   1   =>  100 points
    One   5   =>   50 point
 */

function score(dice) {
    
    
    const filterOnes = dice.filter(n => n === 1);
    let onesScore = 0
    if(filterOnes.length < 3){
        onesScore = filterOnes.length * 100
    } else if(filterOnes.length >= 3){
        onesScore = 1000 + ((filterOnes.length - 3) * 100)
    }



    let sixScore = 0;
    const filterSixes = dice.filter(n => n === 6);
    if(filterSixes.length >= 3) {
        sixScore = 600;
    }



    let fiveScore = 0;
    const filterFives = dice.filter(n => n === 5);
    if(filterFives.length < 3){
        fiveScore = filterFives.length * 50;
    }else if(filterFives.length >= 3){
        fiveScore = 500  + ((filterFives.length - 3 ) * 50)
    }

  

    let fourScore = 0
    const filterFours = dice.filter(n => n === 4);
    if(filterFours.length >= 3) {
        fourScore = 400
    }

  

    let threeScore = 0
    const filterThrees = dice.filter(n => n === 3);
    if(filterThrees.length >= 3){
        threeScore = 300
    }

    

    let twosScore = 0
    const filterTwos = dice.filter(n => n === 2);
    if(filterTwos.length >= 3){
        twosScore = 200
    }

    
    const totalScore = onesScore + sixScore + threeScore +twosScore + fourScore + fiveScore
   
    
    return totalScore
    
}


score([5,5,5,5,6])

module.exports = {
    score
}