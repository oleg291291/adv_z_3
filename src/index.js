module.exports = function getZerosCount(number, base) {

  var sqrBase = Math.sqrt(base);
  var baseVar = base;
  var divArr = [];
  var primesArr = [];

  for (var div = 2; div <= sqrBase; div++) {
    var checkPrime = function (div) {
      for (var i = 2; x % i != 0; i++) {
      }
      return x == i;
    }
    
    if (checkPrime) {
      for (var p = 0; baseVar % div == 0; p++) {
        baseVar /= div;
      }
      if (base % div == 0) {
        divArr.push([div, p]);
      }
    }
  }
  if (baseVar != 1) {
    divArr.push([baseVar, 1]);
  }




  for (var j = 0; j < divArr.length; j++) {

    var n = 0;
    var primeNum = divArr[j][0];
    var d = number / primeNum;
    while (d > 0) {
      n += Math.floor(d);
      d /= primeNum;
    }
    primesArr[j] = n;
  }


  for (var l = 0; l < primesArr.length; l++) {
    primesArr[l] = Math.floor(primesArr[l] / divArr[l][1]);
  }

  var total = Math.min.apply(this, primesArr);
return total;
   
}