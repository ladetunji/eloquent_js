function isEven(number) {
	function solve(current, history) {
		if (current == 0) {
			return `${number} is an even number.`;
			return history;
		}
		else if (current == 1) {
			return number + " is an odd number.";
			return history;
		}
		else {
			return solve(current - 2, `(${history} - 2)`);
		}
	}
	return solve(number, `${number}`);
}

console.log(isEven(72));
