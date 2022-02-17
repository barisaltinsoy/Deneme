function checkCashRegister(price, cash, cid) {
    
    let cashBack = cash - price;
    const beginningCashBack = cashBack + cid;
    var resultedCashBack = {status: '' , change: []};

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
    
    var cidTotal = 0;
    for(let i = 0 ; i < cid.length ; i++ ){
        cidTotal += cid[i][1];
    }
  }
  
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);