function SearchingChallenge(str) { 

    var strSplitted = str.split(" ");
    str = str.toLowerCase();
    var splittedArray = str.split(" ");
    
    var counter = 0;
    var longestRepeatedWord = "-1";
    
    for(var i = 0 ; i < splittedArray.length ; i++){
      for(var j = 0 ; j < splittedArray[i].length ; j++){
        var wordLetterCounter = 0;
          for(var k = j+1; k < splittedArray[i].length ; k++){
            if(splittedArray[i][j] === splittedArray[i][k]){
              wordLetterCounter += 1;
            }
          if(wordLetterCounter > counter){
            counter = wordLetterCounter;
            longestRepeatedWord = strSplitted[i];
          }
          
        }
      }
    }
      // code goes here  
    return longestRepeatedWord;
    }    
console.log(LetterCountI("No Word"));