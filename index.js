// ProjectEuler qid-9 - There exists exactly one Pythagorean triplet for which a+b+c=1000. Find the product abc.


function triplet() {
	let x,y,z;
	let a,b,c;
	for(x = 1; x <= 1000/2; x++) {
		a = (x * x);
		for(y = x; y >= 1; y--){
			b = (y * y);
			for(z = y; z >= 1; z--){
				c = (z * z);
				if((a === b + c) && (x + y + z === 1000)){
				console.log(x,y,z);
				return (x * y * z);}
			}
		}
	}
}

console.log(triplet());