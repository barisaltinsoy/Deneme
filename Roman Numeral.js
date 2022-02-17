function convertToRoman(num) {
 
let romanNumbers =[
    [1000, 'M'],
    [900,'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [1, 'I']
];

if(num === 0 ){
    return "";
}  

for(let i = 0; i < romanNumbers.length; i++){
     if(num >= romanNumbers[i][0]){
            var converted = romanNumbers[i][1] + convertToRoman(num - romanNumbers[i][0])
        }
        
        
    }

    return converted;
   }
   
   convertToRoman(36);