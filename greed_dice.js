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
    One   5   =>   50 points
 */

function score(dice) {
    
    
    // Calculate score for ones
    const onesCount = dice.filter(n => n === 1).length;
    const onesScore = onesCount >= 3 ? 1000 + (onesCount - 3) * 100 : onesCount * 100


    // Calculate score for sixes
    const sixCount = dice.filter(n => n === 6).length;
    const  sixScore = sixCount >= 3 ? 600 : 0;
 

    //Calculate score for fives
  
    const fiveCount = dice.filter(n => n === 5).length;
    const fiveScore = fiveCount >= 3 ? 500 + (fiveCount - 3) * 50 : fiveCount * 50;
   
  
    // calculate score for fives
   
    const fourCount = dice.filter(n => n === 4).length;
    const  fourScore = fourCount >= 3 ? 400 : 0
  
  
    // calculate score for threes
    
    const threeCount = dice.filter(n => n === 3).length;
    const threeScore = threeCount  >= 3 ? 300 : 0;
  
    
    // calculate score for twos

    const twoCount = dice.filter(n => n === 2).length;
    const twoScore = twoCount  >= 3 ? 200 : 0;
   

    
    const totalScore = onesScore + sixScore + threeScore + twoScore + fourScore + fiveScore
   
    
    return totalScore
    
}


score([5,5,5,5,6])

module.exports = {
    score
}