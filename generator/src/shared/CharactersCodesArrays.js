export const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122);
export const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90);
export const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57);
export const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(
  arrayFromLowToHigh(58, 64)
).concat(
  arrayFromLowToHigh(91, 96)
).concat(
  arrayFromLowToHigh(123, 126)
);

function arrayFromLowToHigh(low, high){
  const array = [];
  for (let i = low; i <= high; i++){
    array.push(i);
  }
  return array;
}