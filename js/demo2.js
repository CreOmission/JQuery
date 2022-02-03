let estado=false;
function flipar(n){
	let parr = "#p" + n;
	let btn = "#b" +n;

	if (estado==true) {
		$(parr).css("background-color", "transparent");
		$(btn).text("Rojo" + n);
		estado=false;
	}else{
		$(parr).css("background-color", "red");
		$(btn).text("Transparente" + n);
		estado=true;
	}
}