function checkCashRegister(price, cash, cid) {
    
    let cashBack = cash * 100 - price * 100;
    let cidSum = 0;

    for(let elem of cid){
        cidSum += elem[1]*100;
        }
    if(cashBack > cidSum){
        return {status: "INSUFFICIENT_FUNDS", change: []};
    }else if(cashBack === cidSum){
        return {status: "CLOSED", change: cid};
    }else{
        cid = cid.reverse();
        
        let cashArrayByHundred = [
            ["ONE HUNDRED", 100],
            ["TWENTY", 20],
            ["TEN", 10],
            ["FIVE", 5],
            ["ONE", 1],
            ["QUARTER", 0.25],
            ["DIME", 0.1],
            ["NICKEL", 0.05],
            ["PENNY", 0.01]
            ];
            
        for(let elem of cid){
            let cashBackByUnit = [elem[0], 0];
            elem[1] = elem[1] * 100;
            while(cashBack >= cashArrayByHundred[elem[0]] && elem[1] > 0){
                cashBack -= cashArrayByHundred[elem[0]];
                elem[1] -= cashArrayByHundred[elem[0]];
                cashBackByUnit += cashArrayByHundred[elem[0]];
            }
        }
    }

}
    checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])