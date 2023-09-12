// ProjectEuler qid-4 - Find the difference between the sum of the squares of the first one hundered natural numbers and the square of the sum.

function sumSquare(num) {
	let x;
	let y = 0;
	let z = 0;
	for(x = 1; x <= num; x++)
	{
		y += (x * x);
		z += x;
	}
	return ((z * z) - y);
}

console.log(sumSquare(100));