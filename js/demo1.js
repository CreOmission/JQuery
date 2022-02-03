function flipar(n){
	let parr = "#p" + n;
	let btn = "#b" +n;



	if ($(parr).css('display')!='none') {
		$(parr).hide();
		$(btn).text("Mostrar" + n);
	}else{
		$(parr).show();
		$(btn).text("Ocultar");
	}
}