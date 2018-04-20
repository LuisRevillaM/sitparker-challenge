# SitParker Challenge

* Implementation of a function `add` that takes n positive integers of type **String** as input, and returns their addition as a **String**.
* Only single digit (base 10) additions are performed within `add`.

## Requirements

This project requires [Node.js](https://nodejs.org/en/)  to be installed on your system.
The [Yarn](https://yarnpkg.com/en/) package manager is also recommended.

## Installation

To install the testing dependencies, run:

```
yarn
# or
npm install
```   
## Testing

To only test the `add` function suite:

```
yarn test
# or
npm run test
```

To run all tests, including utility abstractions:

```
yarn test:all
# or
npm run test:all
```
## Extra credit

The `add` function reduces an array of inputs into a single value. The reducer function handles two values at a time (the accumulated and current values in the array).

To handle negative inputs, the reducer function evaluates whether the accumulated and current values have the same sign.

If they do, we execute the function `addTwoStrings` (standard digit by digit addition, placing units and "carrying" the tens), and keep whatever sign the addends had.

If the accumulated and current values don't have the same sign, the reducer executes `subtractTwoStrings`, following the standard base10, digit by digit subtraction, regrouping (or "borrowing" from) the positional values as needed.

Main caveat with this algorithm is that, even though the operation is done digit by digit, when regrouping the minuend, certain positional values exceed the number 10.

The regrouping or borrowing was achieved with a recursive function.
