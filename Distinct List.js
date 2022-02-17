function DistinctList(arr) { 

    var duplicateCounter = 0;
    
    for(var i = 0 ; i < arr.length-1 ; i++){
      for(var j = 0 ; j < arr.length ; j++){
        if(arr[i] === arr[j] && i !== j){
          duplicateCounter++;
        }
      }
      }
    
      // code goes here  
      
      
      return duplicateCounter/2; 
    
    }
       
    // keep this function call here 
    console.log(DistinctList([0,-2,-2,5,5,5]));