const roundTo = function(number, step) {
	let remainder = number % step;
	return number - remainder + (remainder < step / 2 ? 0 : step);
};

console.log(roundTo(327, 10));
