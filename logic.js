//Show the digits int he expression display
function show(it) {
	var disp = document.getElementById('displayexpn');
		
		disp.value += it;
		eql();
}

//Compute the answer for the answer display
function eql() {
	var dispex = document.getElementById('displayexpn');
	var dispans = document.getElementById('displayans');
	
	var ans = eval(dispex.value);
	dispans.value = ans;
	
	
}

//Deletes a character
function del() {
	var disp = document.getElementById('displayexpn');

	var afterdel = disp.value.slice(0, -1);

	disp.value = afterdel;

}

//Computes factorial and displays it
function fact() {
	var numobj = document.getElementById('displayexpn');
	var dispans = document.getElementById('displayans');
	
	var num = Number(numobj.value);

	document.getElementById('displayexpn').value += '!';

	var ans = 1;
	var i;
	if( num > 0) { 
		for(i = 1; i <= num; i++) {
			ans *= i;
		}
		dispans.value = ans;
	}
	else {
		dispans.value = "Undefined";
	}

}

//Computes powers and displays them
function power(n) {
	var numobj = document.getElementById('displayexpn');
	var dispans = document.getElementById('displayans');

	var num = Number(numobj.value);
	console.log(num);
	var ans;
	if( n == 2 || n ==3 ) {
		document.getElementById('displayexpn').value += '^' + n;
		ans = Math.pow(num, n);
	}
	else {
		document.getElementById('displayexpn').value += '^' + .5;
		ans = Math.pow(num, .5);
	}

	dispans.value = ans;
}