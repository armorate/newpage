// ProjectEuler qid-7 - What is the 10001st prime number?


function logPrime(index) {
	let x, y;
	let z = 0;
	let array = [2];
	for(x = 3; x <= Number.MAX_SAFE_INTEGER; x+=2){
		for(y = 3; y < x; y++){
			if((x % y) === 0) {z = 1;}
		}
		if(z === 0) {array.push(x)}
		z = 0;
		if(array.length === index)  {return array[index - 1];}
	}
}

console.log(logPrime(10001));