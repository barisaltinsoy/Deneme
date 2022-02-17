function checkCashRegister(price, cash, cid) {
    
    const cashArray = [
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

    let cashBack = parseFloat(cash - price).toFixed(2);
    let cidCurrent = 0;
    for(let elem of cid){
        cidCurrent += elem[1];
        
    }
    cidCurrent = parseFloat(cidCurrent).toFixed(2);
    
    if( cashBack > cidCurrent ){
        return {status: "INSUFFICIENT_FUNDS", change: []}
    }else if(cashBack === cidCurrent){
        return {status: "CLOSED", change: cid}
    }else{
        cid = cashArray;
        for(let elem of cid){
            let cashReturn = [elem[0], 0];
            elem[1] = parseFloat(elem[1]).toFixed(2);

            while(cashBack >= cashArray[elem[1]){
                cashBack -= cid[elem[0]];
                cashReturn[1] += cid[elem[0]];
                
            }
            console.log[cashReturn];
        }
    }
  }
  
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);