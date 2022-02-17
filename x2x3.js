const newMultipliedArray = (numbers) => {

    const newNumbers = numbers.map( x =>{
        if(x %2 == 0){
            return x * 2
        }else if(x %2 == 1){
            return x * 3
        }

    });
    return newNumbers
}
console.log(newMultipliedArray([1,2,3,4,5]));

