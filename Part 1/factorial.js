function factorial(n) {
	if (n == 0) {
		return 1;
	} else {
		return factorial(n-1) * n;
	}
}
console.log("10 factorial is", factorial(10));
