import utils from "./utils.js";

function add() {
  const addends = [...arguments];
  const addition = addends.reduce((total, current) => {
    if (signsDiffer(total, current)) {
      return subtractTwoStrings(total, current);
    } else {
      return addTwoStrings(total, current);
    }
  });
  return addition;
}

const { addTwoStrings, signsDiffer, subtractTwoStrings } = utils;

export default add;
