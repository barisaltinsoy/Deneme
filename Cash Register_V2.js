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
        for(let i = 0 ; i < cashArray.length ; i++){
            cashBackArray = "";
            var cashBackUnit = 0;
            var counter = 0;
            cashArray[i][1] = parseFloat(cashArray[i][1]).toFixed(2);
            while(cashBack >= parseFloat(cashArray[i][1]).toFixed(2)){
                cashBack -= parseFloat(cashArray[i][1]).toFixed(2);
                cashBackUnit += cashArray[i][1];
                cashBackUnit = parseFloat(cashBackUnit).toFixed(2);
                cashBackArray += cashArray[i][0] + "," + cashArray[i][1];
                console.log(cashBackArray);
            }
        }
    }
  }
  
  checkCashRegister(17, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);