var tab = 0;

document.body.append("=TABUADA 0 ao 9=")
document.write("<br>");

for (var i = 0; i < 10; i++) {
	document.write("<br>");
	for (var n = 1; n < 11; n++) {
		tab = n * i
		document.write(i + " x " + n + " = " + tab + " \n ");
		document.write("<br>");
	}
}