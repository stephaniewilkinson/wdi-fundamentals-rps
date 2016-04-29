var result;
var max = 10;

for (var x = 1; x <= max; x += 1) {
  if (x % 15 === 0) {
    result = "fizzbuzz";
    }
  else if (x % 3 === 0) {
    result = "fizz";
    }
  else if (x % 5 === 0) {
    result = "buzz"
    }
  else result = x
  console.log(result);
}
