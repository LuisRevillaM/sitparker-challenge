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
      let sum = Number(a) + Number(b) + carried;
      let sumStr = sum.toString();

      if (sum > 9) {
        let lastChar = sumStr.charAt(sumStr.length - 1);
        result.unshift(lastChar);
        carry = true;
      } else {
        result.unshift(sumStr);
        carry = false;
      }
    } else if (a) {
      let sum = Number(a) + carried;
      let sumStr = sum.toString();

      if (sum > 9) {
        let lastChar = sumStr.charAt(sumStr.length - 1);
        result.unshift(lastChar);
        carry = true;
      } else {
        result.unshift(sumStr);
        carry = false;
      }
    } else if (b) {
      let sum = Number(b) + carried;
      let sumStr = sum.toString();

      if (sum > 9) {
        let lastChar = sumStr.charAt(sumStr.length - 1);
        result.unshift(lastChar);
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

function add() {
  const addends = [...arguments];
  const addition = addends.reduce((total, current) =>
    addTwoStrings(total, current)
  );
  return addition;
}

export default add;
