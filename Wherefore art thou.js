function whatIsInAName(collection, source) {
    const arr = [];
    // Only change code below this line
  
  for(let i = 0; i < collection.length ; i++){
    const holdObj = collection[i];
    let checker = true;
    for(let key in source){
      if(holdObj[key] !== source[key]){
        checker = false;
        continue;
        }
    }
    if(checker) arr.push(holdObj);
      
  }
  
    // Only change code above this line
    return arr;
  }
  
  whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });