function buildFunctions() {
	arr = [];

	for (var i = 0; i < 3; i++) {
		arr.push(
			function(){
				console.log(i);
			}
		);
	}

	return arr;
}

var fs = buildFunctions();

fs[0]();
fs[1]();
fs[2]();

function buildFunctions2() {
	arr = [];

	for (var i = 0; i < 3; i++) {
		arr.push(
			(function(j) {
				return function() {
					console.log(j);
				}	
			}(i))
		);
	}

	return arr;
}

var fs2 = buildFunctions2();

fs2[0]();
fs2[1]();
fs2[2]();

function buildFunctions3() {
	arr = [];

	for (var i = 0; i < 3; i++) {
		let j = i;
		arr.push(
			function() {
				console.log(j);
			}
		);
	}

	return arr;
}

var fs3 = buildFunctions3();

fs3[0]();
fs3[1]();
fs3[2]();