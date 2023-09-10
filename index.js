// ProjectEuler qid-1 - Find the sum of all the multiples of 3 or 5 below 1000.

function logSum(num) {
	let x = 0;
	let array = [];
	for(x = 1; x < num; x++)
	{
		if(x % 3 === 0 || x % 5 === 0)
			array.push(x);
	}
	return array.reduce((a, b) => a + b);
}

console.log(logSum(1000));