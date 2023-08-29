// default parameters

function interest(principle, rate = 4, years = 3) // here rate and years are default parameters because they have a default value.
{
  return principle * rate/100 * years;
}

console.log(interest(4000));