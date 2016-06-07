var contactos =  [{
              image:"image/raymi.jpg",
              name:"Raymi Saldomando",
              time: "últ. vez hoy a las 10:06"
            },{
              image:"image/mariana.jpg",
              name:"Mariana Costa",
              time: "En línea"
            },{
              image:"image/anamaria.jpg",
              name:"Ana María Martinez Franklin",
              time: "últ. vez hoy a las 9:15"	
            },{
              image:"image/rodulfo.jpg",
              name:"Rodulfo Prieto",
              time: "últ. vez ayer a las 15:12"
            },{
              image:"image/andrea.jpg",
              name:"Andrea Lamas",
              time: "últ. vez hoy a las 8:04"	
            },{
              image:"image/mariapaula.jpg",
              name:"Maria Paula Rivarola",
              time: "En línea"	
            },{
              image:"image/katy.jpg",
              name:"Katy Sanchez",
              time: "últ. vez hoy a las 9:50"	
            },{
              image:"image/aldo.jpg",
              name:"Aldo Alfaro",
              time: "últ. vez ayer a las 00:04"	
            },{
              image:"image/logocodeacademy.png",
              name:"Laboratoria Perú",
              time: "Ana Maria, Aldo, Gian, Mariana, Papu, Tú"
            }];
function getInputValue() {
	var inputBox = document.getElementById("inputBox");
	return inputBox.value;
}
function activity() {
	var inputBoxValue = getInputValue();
	if (inputBoxValue !== "") {
		doitem(inputBoxValue);
		write2();
		clean();
	}
}
function doitem(itText) {
	var list = document.getElementById("list");
	//Crear el elemento
	var elemento = document.createElement("li");
	elemento.className = "clearfix";
	var elemento1 = document.createElement("div");
	elemento1.className = "boxchat-right";
	var texto = document.createElement("p");
	texto.className = "descripcion m-0";
	texto.innerHTML = itText;
	var time = document.createElement("span");
	time.className = 'fecha';
	var d = new Date();
	var min = d.getMinutes();
	var mins= (min < 10) ? '0' + min : min
	time.innerHTML = d.getHours()+":" + mins;
	elemento.appendChild(elemento1);
	elemento1.appendChild(texto);
	elemento1.appendChild(time);
	list.appendChild(elemento);
}
function write2(){
		var str = document.getElementById("ultimo").innerHTML;
		var etr = getInputValue();
		var res = str.replace( str , etr );
		document.getElementById("ultimo").innerHTML = res
}
function clean() {
	var inputBox = document.getElementById("inputBox");
	inputBox.value = "";
	inputBox.focus();
}
function limpiar(){
	   document.getElementById("list").innerHTML="";
	}
$("#buscador").keypress(function(){
	if(event.which===13){
		var esconder = $(".hidecont");5
		var contactss = $(".contname");
		var texto    = $("#buscador").val();
		texto        = texto.toLowerCase();
		contactss.show();
		for(var i=0; i< contactss.size(); i++){
			var contenido = contactss.eq(i).text();
			contenido     = contenido.toLowerCase();
			var index     = contenido.indexOf(texto);
			if(index == -1){
				esconder.eq(i).hide();
			}	
		}
		limpiar();

	}
});
function limpiar(){
	if($('#buscador').val() === ""){
		$('.hidecont').addClass("display")}
}
$("#raymi").click(function(){
    $("#list").empty();
    $("#fotoactual").attr("src", contactos[0].image);
    var act = document.getElementById("nombreactual").innerHTML;
	var act2 = act.replace( act , contactos[0].name);
	document.getElementById("nombreactual").innerHTML = act2;

	var act3 = document.getElementById("horaactual").innerHTML;
	var act4 = act3.replace( act3 , contactos[0].time);
	document.getElementById("horaactual").innerHTML = act4;
});
$("#mari").click(function(){
    $("#list").empty();
    $("#fotoactual").attr("src", contactos[1].image);
    var act = document.getElementById("nombreactual").innerHTML;
	var act2 = act.replace( act , contactos[1].name);
	document.getElementById("nombreactual").innerHTML = act2;

	var act3 = document.getElementById("horaactual").innerHTML;
	var act4 = act3.replace( act3 , contactos[1].time);
	document.getElementById("horaactual").innerHTML = act4;
});
$("#chama").click(function(){
    $("#list").empty();
    $("#fotoactual").attr("src", contactos[2].image);
    var act = document.getElementById("nombreactual").innerHTML;
	var act2 = act.replace( act , contactos[2].name);
	document.getElementById("nombreactual").innerHTML = act2;
	var act3 = document.getElementById("horaactual").innerHTML;
	var act4 = act3.replace( act3 , contactos[2].time);
	document.getElementById("horaactual").innerHTML = act4;
});
$("#chamo").click(function(){
    $("#list").empty();
    $("#fotoactual").attr("src", contactos[3].image);
    var act = document.getElementById("nombreactual").innerHTML;
	var act2 = act.replace( act , contactos[3].name);
	document.getElementById("nombreactual").innerHTML = act2;
	var act3 = document.getElementById("horaactual").innerHTML;
	var act4 = act3.replace( act3 , contactos[3].time);
	document.getElementById("horaactual").innerHTML = act4;
});
$("#andrea").click(function(){
    $("#list").empty();
    $("#fotoactual").attr("src", contactos[4].image);
    var act = document.getElementById("nombreactual").innerHTML;
	var act2 = act.replace( act , contactos[4].name);
	document.getElementById("nombreactual").innerHTML = act2;
	var act3 = document.getElementById("horaactual").innerHTML;
	var act4 = act3.replace( act3 , contactos[4].time);
	document.getElementById("horaactual").innerHTML = act4;
});
$("#papu").click(function(){
    $("#list").empty();
    $("#fotoactual").attr("src", contactos[5].image);
    var act = document.getElementById("nombreactual").innerHTML;
	var act2 = act.replace( act , contactos[5].name);
	document.getElementById("nombreactual").innerHTML = act2;
	var act3 = document.getElementById("horaactual").innerHTML;
	var act4 = act3.replace( act3 , contactos[5].time);
	document.getElementById("horaactual").innerHTML = act4;
});
$("#katy").click(function(){
    $("#list").empty();
    $("#fotoactual").attr("src", contactos[6].image);
    var act = document.getElementById("nombreactual").innerHTML;
	var act2 = act.replace( act , contactos[6].name);
	document.getElementById("nombreactual").innerHTML = act2;
	var act3 = document.getElementById("horaactual").innerHTML;
	var act4 = act3.replace( act3 , contactos[6].time);
	document.getElementById("horaactual").innerHTML = act4;
});
$("#aldo").click(function(){
    $("#list").empty();
    $("#fotoactual").attr("src", contactos[7].image);
    var act = document.getElementById("nombreactual").innerHTML;
	var act2 = act.replace( act , contactos[7].name);
	document.getElementById("nombreactual").innerHTML = act2;
	var act3 = document.getElementById("horaactual").innerHTML;
	var act4 = act3.replace( act3 , contactos[7].time);
	document.getElementById("horaactual").innerHTML = act4;
});
$("#laboratoria").click(function(){
    $("#list").empty();
    $("#fotoactual").attr("src", contactos[8].image);
    var act = document.getElementById("nombreactual").innerHTML;
	var act2 = act.replace( act , contactos[8].name);
	document.getElementById("nombreactual").innerHTML = act2;
	var act3 = document.getElementById("horaactual").innerHTML;
	var act4 = act3.replace( act3 , contactos[8].time);
	document.getElementById("horaactual").innerHTML = act4;
});