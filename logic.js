function show(it) {
	var disp = document.getElementById('displayexpn');
		
		disp.value += it;
		eql();
}

function eql() {
	var dispex = document.getElementById('displayexpn');
	var dispans = document.getElementById('displayans');
	
	var ans = eval(dispex.value);
	dispans.value = ans;
	
	
}

function del() {
	var disp = document.getElementById('displayexpn');

	var afterdel = disp.value.slice(0, -1);

	disp.value = afterdel;

}

function fact() {
	var numobj = document.getElementById('displayexpn');
	var dispans = document.getElementById('displayans');
	console.log(numobj);
	var num = Number(numobj.value);

	document.getElementById('displayexpn').value += '!';

	console.log(num);
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

function ln() {
	
}