import utils from "./utils.js";

function add() {
  const addends = [...arguments];
  addends.forEach((a, i) => {
    if (negativeZeros(a)) {
      addends[i] = a.slice(1);
    }
  });
  const addition = addends.reduce((total, current) => {
    if (signsDiffer(total, current)) {
      return subtractTwoStrings(total, current);
    } else {
      return addTwoStrings(total, current);
    }
  });
  return addition;
}

const { addTwoStrings, signsDiffer, subtractTwoStrings, negativeZeros } = utils;

export default add;
