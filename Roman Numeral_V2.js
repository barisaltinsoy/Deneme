function convertToRoman(num) {
 
var romanNumbers =[
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
    [4, 'IV'],
    [1, 'I']    
];

for(var i = 0; i < romanNumbers.length; i++){
    if(num === 0)
        return "";
    else if(num >= romanNumbers[i][0]){
        return romanNumbers[i][1] + convertToRoman(num - romanNumbers[i][0]);
        }
    }   
}
   
   convertToRoman(36);