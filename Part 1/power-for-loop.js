const power = function(n, e) {
	let result = 1;
	for (let i = 0; i < e; i++) {
	result = result * n;
	}
	console.log(result);
};

power(3, 10);
