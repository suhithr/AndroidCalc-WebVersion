function show(it) {
	var disp = document.getElementById('displayexpn');
	disp.value += it;

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