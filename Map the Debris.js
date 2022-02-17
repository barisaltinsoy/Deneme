function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    const r = 2*Math.PI;
    const altInSecArray = [];
  
    const orbPeriodArray = function(obj){
      const c = Math.pow(earthRadius + obj.avgAlt, 3);
      
      const b = Math.sqrt(c / GM);
      
      const orbPeriod = Math.round(r * b);
      
      return {name: obj.name, orbitalPeriod: orbPeriod};
    };
    for(let elem in arr){
      altInSecArray.push(orbPeriodArray(arr[elem]));
    }
    return altInSecArray;
  }
  
  console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));
 