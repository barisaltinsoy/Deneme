function BitmapHoles(strArr) { 

    // code goes here  
    var holeArr = [];
    var holeCount = 0;
    

    for( var i = 0; i < strArr.length; i++){
      strArr[i] = strArr[i].split('');
      for( var j = 0; j < strArr[i].length; j++){
        if( strArr[i][j] === "0"){
          holeArr.push([i,j]);
        }
      }
    }

    for(var x = 0; x <= holeArr.length; x++){
      var control = 0;
      for( var z = x+1; z <= holeArr.length; z++){
        if( holeArr[x][0] === holeArr[z][0]+1 || holeArr[x][1] === holeArr[z[1]]){
          holeCount += 1;
        }
      }
    }



    return holeCount;
  }
     
  let arr = ["01111", "01101", "00011", "11110"]
  console.log(BitmapHoles(arr));