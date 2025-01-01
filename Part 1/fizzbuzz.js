for (let i=1; i<=100; i++) {
	if (i % 3 == 0 && i % 5 != 0) console.log("Fizz");
	else if (i % 3 != 0 && i % 5 == 0) console.log("Buzz");
	else if (i % 3 == 0 && i % 5 == 0) console.log("FizzBuzz");
	else console.log(i);
}

console.log("\n");

for (let j=1; j<=100; j++) {
	let result = "";
	if (j % 3 == 0) result += "Pussy";
	if (j % 5 == 0) result += "Cat";
	console.log(result || j);
}
