function sumStrings(a,b) { 
  let oneArray = a.split("");
  let twoArray = b.split("");
  let finalArray = [];
  
  oneArray = frontPadArray(oneArray, "0", twoArray.length);
  twoArray = frontPadArray(twoArray, "0", oneArray.length);
  
  console.log(oneArray, twoArray);
  
  let carryOverNumber = 0;
  
  for (let i = oneArray.length; i >= 0; i--) {
    let num = parseInt(oneArray[i]) + parseInt(twoArray[i]) + carryOverNumber;
    console.log(num);
    carryOverNumber = 0;
    if (num >= 10) {
      carryOverNumber = Math.floor(num/10);
      num -= 10;
    }
    
    if (!isNaN(num)) {
      finalArray.unshift(num);
    }
  }
  
  if (carryOverNumber > 0) {
    finalArray.unshift(carryOverNumber);
  }
  
  for (let i = 0; i < finalArray.length; i++) {
    if (finalArray[i] == "0") {
      finalArray.shift();
    } else {
      break;
    }
  }
  
  return finalArray.join("");
}


function frontPadArray(array, item, length) {
  while (array.length < length) {
    array.unshift(item);
  }
  return array;
}


console.log(sumStrings("123", "456"));
console.log(sumStrings("8797", "45"));
console.log(sumStrings("800", "9567"));
console.log(sumStrings("00103", "08567"));


