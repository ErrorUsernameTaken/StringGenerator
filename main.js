function makeString() {
	var string = "";
	var all = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

	for (var i = 0; i <  Math.floor(Math.random() * 100); i++) 
		string += all.charAt(Math.floor(Math.random() * all.length));
		return string;
	
}

console.log(makeString());
