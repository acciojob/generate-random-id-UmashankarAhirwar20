function makeid(l){
  // write your code here
	let result = "";
	let charList = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

	for (let index = 0; index < l; index++) {
		result += charList.charAt(
			Math.random() * charList.length
		)
	}
	return result;
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
