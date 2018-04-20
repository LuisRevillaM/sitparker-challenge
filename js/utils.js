function addTwoStrings(strA, strB) {
  let loopTest, neg;
  const arrA = strA.split("");
  const arrB = strB.split("");
  if (arrA[0] === "-" && arrB[0] === "-") {
    neg = true;
    arrA.shift();
    arrB.shift();
  }

  const aLength = arrA.length;
  const bLength = arrB.length;
  const result = [];
  let carry = false;

  if (aLength >= bLength) {
    loopTest = aLength + 1;
  } else {
    loopTest = bLength + 1;
  }

  for (let i = 1; i < loopTest; i++) {
    let carried = carry ? 1 : 0;
    let a = arrA[aLength - i];
    let b = arrB[bLength - i];

    if (a && b) {
      let sum = addSingleDigits(Number(a), Number(b), carried);
      let sumStr = sum.toString();

      if (hasTwoDigits(sum)) {
        let lastDigit = lastCharacter(sumStr);
        result.unshift(lastDigit);
        carry = true;
      } else {
        result.unshift(sumStr);
        carry = false;
      }
    } else if (a) {
      let sum = addSingleDigits(Number(a), carried);
      let sumStr = sum.toString();

      if (hasTwoDigits(sum)) {
        let lastDigit = lastCharacter(sumStr);
        result.unshift(lastDigit);
        carry = true;
      } else {
        result.unshift(sumStr);
        carry = false;
      }
    } else if (b) {
      let sum = addSingleDigits(Number(b), carried);
      let sumStr = sum.toString();

      if (hasTwoDigits(sum)) {
        let lastDigit = lastCharacter(sumStr);
        result.unshift(lastDigit);
        carry = true;
      } else {
        result.unshift(sumStr);
        carry = false;
      }
    }
  }

  if (carry) {
    result.unshift((1).toString());
  }

  if (neg) {
    result.unshift("-");
  }

  return result.join("");
}

function subtractTwoStrings(strA, strB) {
  let min, sub, neg, loopTest;
  const result = [];
  const arrA = strA.split("");
  const arrB = strB.split("");

  if (Math.abs(strA) >= Math.abs(strB)) {
    min = arrA;
    sub = arrB;
  } else {
    min = arrB;
    sub = arrA;
  }

  if (min[0] === "-") {
    neg = true;
    min.shift();
  } else {
    neg = false;
    sub.shift();
  }

  loopTest = min.length + 1;

  for (let i = 1; i < loopTest; i++) {
    let a = min[min.length - i],
      b = sub[sub.length - i];

    let aNum = Number(a),
      bNum = Number(b);
    if (b !== undefined && bNum > aNum) {
      reGroup(min, min.length - i);
      let op = Number(min[min.length - i]) - bNum;
      result.unshift(op.toString());
    } else if (b !== undefined) {
      let op = aNum - bNum;
      result.unshift(op.toString());
    } else {
      result.unshift(aNum.toString());
    }
  }

  if (neg === true && Number(result.join("")) !== 0) {
    result.unshift("-");
    return result.join("");
  } else {
    return result.join("");
  }
}

function reGroup(arr, i) {
  if (arr[i - 1] === "0") {
    reGroup(arr, i - 1);
  }
  arr[i - 1] = (Number(arr[i - 1]) - 1).toString();

  arr[i] = (Number(arr[i]) + 10).toString();
}

function addSingleDigits() {
  const addends = [...arguments];
  let accum = 0;

  addends.forEach(num => {
    if (hasTwoDigits(num)) {
      throw "Addend(s) with two digits";
    } else {
      accum = accum + num;
    }
  });

  return accum;
}

function hasTwoDigits(num) {
  if (num > 9 || num < -9) {
    return true;
  } else {
    return false;
  }
}

function lastCharacter(str) {
  const last = str.charAt(str.length - 1);
  return last;
}

function negativeZeros(n) {
  const nSplit = n.split("");

  if (nSplit[0] === "-") {
    let allZero = true;

    nSplit.forEach((e, i) => {
      if (e !== "0" && i > 0) {
        allZero = false;
      }
    });

    return allZero;
  } else {
    return false;
  }
}

function signsDiffer(a, b) {
  const numA = Number(a),
    numB = Number(b);

  if (numA < 0 && numB >= 0) {
    return true;
  } else if (numA >= 0 && numB < 0) {
    return true;
  } else {
    return false;
  }
}

const utils = {
  addTwoStrings,
  addSingleDigits,
  hasTwoDigits,
  lastCharacter,
  signsDiffer,
  subtractTwoStrings,
  negativeZeros
};

/* */

export default utils;
