function reverseString(str) {
  let stringAsArray = str.split("");
  stringAsArray = stringAsArray.reverse();
  str = stringAsArray.join("");
  return str;
}

reverseString("hello");
