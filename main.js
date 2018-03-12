
function makeString() {
	var string = "";
	var all2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

	for (var i = 0; i < Math.floor(Math.random() * 50); i++) {
		string += all.charAt(Math.floor(Math.random() * all.length));
		return string;
	}
}

console.log(makeString());
