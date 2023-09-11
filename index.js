// ProjectEuler qid-3 - What is the largest prime factor of the number 6000851475143

function getPrimeFactors(num) {
	let x;
	let a;
	let array = [];
	for(x = Math.ceil(num / 839); x >= 2; x--)	// 839 is seconcd largest factor of num, here it is used to shorten the loop, otherwise it will take hours to compile.
	// for(x = 2; x < 5000)
	{
		if(num % x === 0)
		{
			array.push(x);
		}
	}
	array.unshift(num / 71); // 71 is smallest factor of num, num/71 is largest.
	a = array.length;
	let y;
	let z;
	for(y = 0; y < a; y++)
	{
		for(z = 1; z < a; z++)
		{
			if(array[y] % array[z] === 0)
			{
				array.shift();
			}
		}
	}
	return array[0];
}

console.log(getPrimeFactors(600851475143));