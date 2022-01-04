module.exports = function toReadable (number) {
  let ones = [
    "zero", "one", "two", "three", "four",
    "five", "six", "seven", "eight", "nine",
    "ten", "eleven", "twelve", "thirteen", "fourteen",
    "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"
  ];
  let tens = [
    "twenty", "thirty", "forty", "fifty",
    "sixty", "seventy", "eighty", "ninety"
  ];
  // Assuming the number is between 0 and 999
  let groups = [];
  let hundreds = parseInt(number / 100), remainder = number % 100;
  if (hundreds) { groups.push(`${ones[hundreds]} hundred`); }
  if (remainder >= 20) {
    let dozens = parseInt(remainder / 10);
    if (dozens) { groups.push(tens[dozens-2]); }
    remainder %= 10;
  }
  if (remainder || groups.length == 0) { groups.push(ones[remainder]); }
  return groups.join(" ");
}
