function isEven(n) {
	function solve(c, h) {
		if (c == 0) {
			return true;
			return h;
		}
		else if (c == 1) {
			return false;
			return h;
		}
		else {
			return solve(c-2, `(${h} - 2)`);
		}
	}
	return solve(n, `${n}`);
}

console.log(isEven(9));

