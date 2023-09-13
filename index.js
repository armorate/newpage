// ProjectEuler qid-5 - what is the smallest positive number that is completely divisible by all of the numbers from 1 to 20?


function divisible(num) {
	let x,y,z;
	let a = 1;
	let b = 0;
	let c = 0;
	// for(x = 1; x <= num; x++)
	// {
	// 	if(x == 5) {console.log(a);}
	// 	if(a < x) { a *= x}
	// 	else if(a % x !== 0) { a *= (x / (a % x));}
	// }

		for(x = 2; x < Number.MAX_SAFE_INTEGER; x++)
	{
		for(y = 1; y <= num; y++)
		{
			if(x % y === 0) { b++;}
			else { b = 0;}
		}
		if(b == num) {return x;}
	}
	return a;
}

console.log(divisible(20));
