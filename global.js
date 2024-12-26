let x = 10;   // Global
if (true) {
	let y = 20; // Local to block
	var z = 30; // Also global
	console.log(x+y+z);
}
