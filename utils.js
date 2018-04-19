function addTwoStrings(strA, strB) {
  let loopTest;
  const arrA = strA.split("");
  const arrB = strB.split("");
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

  return result.join("");
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

const utils = {
  addTwoStrings,
  addSingleDigits,
  hasTwoDigits,
  lastCharacter
};

export default utils;
