// Rest operator - the rest operator is used to take the arguments and makes an array out of them.

function cart(discount, ...prices) {
  console.log(prices);
  let value = prices.reduce((a , b) => a + b);
  return value * (1-discount/100);
}

console.log(cart(25,399,200,139));