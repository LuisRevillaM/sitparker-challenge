import utils from "./utils.js";

function add() {
  const addends = [...arguments];
  const addition = addends.reduce((total, current) =>
    addTwoStrings(total, current)
  );
  return addition;
}

const { addTwoStrings } = utils;

export default add;
