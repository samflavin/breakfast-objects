let pantryContents  = {
  pancakeMixBags: 1,
  chocolateChips: 20
};

let refrigeratorContents  = {
  eggs: 4,
  baconStrips: 12,
  chocolateChips: 200,
  cheeseSlices: 6,
  tomatoes: 1,
  onions: 1,
};

// You shouldn't need to change anything above this line initially
// You may change it to test different scenarios, but it should work as is
let eggsNeeded = 8;
let baconNeeded = 12;
let panBagsNeeded = 1;
let cChipsNeeded = 60;

function breakfastChecker(contents) {

  if (contents.eggs >= eggsNeeded & contents.baconStrips >= baconNeeded 
    || contents.pancakeMixBags >= panBagsNeeded & contents.chocolateChips >= cChipsNeeded){
    return true
  }//egg check done
  else{
    return false
  }//not enough
}//breakfast checker done
  
  







// Your function should return 'yes' or 'no'
console.log('Does the pantry have enough food for breakfast?', breakfastChecker(pantryContents));
console.log('Does the refrigerator have enough food for breakfast?', breakfastChecker(refrigeratorContents));