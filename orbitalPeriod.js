
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
 
  //using formula t=2*pi(Squire root of (a*a*a)/GM)
  return arr.reduce((all, item) => {
    var formula = Math.round(2*Math.PI*(Math.sqrt(Math.pow(earthRadius + item.avgAlt, 3)/GM)));
    all.push({name: item.name, orbitalPeriod: formula});
    return all;
  }, []);
}
orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);