function rot13(str) {
   
    var shiftCipher = "";

    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
    'M', 'N', 'O', 'P', 'Q', 'R',  'S', 'T', 'U', 'V', 'W', 'X',
    'Y', 'Z' ]; 
      
    for(var i = 0; i < str.length; i++) {
        if(str[i] === " " || str[i] === "!" || str[i] === "?" || str[i] === "."){
            shiftCipher += str[i];
        }
        else if(alphabet.indexOf(str[i]) - 12 > 0){
            var convertedID = alphabet[alphabet.indexOf(str[i])-13];
            
        shiftCipher += convertedID;
        }else{
            var ConvertedID = alphabet[(alphabet.length + alphabet.indexOf(str[i]) - 13)];
           shiftCipher += ConvertedID;
        }
    }   
    return shiftCipher;

  }
  console.log(rot13("SERR PBQR PNZC"));
 
  

