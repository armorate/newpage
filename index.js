// ProjectEuler qid-2 - By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

function logFibSum(num) {
	let x;
	let array = [1,2];
	for(x = 1; x < 100; x++)
	{	
		if(array[x] >= num)
		{
			array.pop(array[x]);
			return array.reduce((a, b) => {if(b % 2 === 0){a += b;} return a;},0);
		}
		array.push(array[x] + array[x - 1]);
	}
	return array.reduce((a, b) => a + b);
}

console.log(logFibSum(4000000));