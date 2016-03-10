// _blank Team


/* GOOGLE MAPS */
function initialize() {
	console.log("YO");

	map = new google.maps.Map(document.getElementById("map_canvas"), {
		zoom: 19,
		center: new google.maps.LatLng(48.867658, 2.379018),
		mapTypeId: google.maps.MapTypeId.ROADMAP
	});
	initMap();
}
function initMap() {
	var myLatLng = {lat: -25.363, lng: 131.044};
	
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 4,
		center: myLatLng
	});
	
	var marker = new google.maps.Marker({
		position: myLatLng,
		map: map,
		title: 'Hello World!'
	});
}

/* TIMER */	      
function Megazord () {

	console.log("WESH");

	var date = new Date();
	var date2 = new Date("May 20 19:00:00 2016");
	var jour = date.getDate();
	var moi = date.getMonth()+1;
	var annee = date.getFullYear();
	var delta_secondes = Math.floor((date2 - date)/1000);
	var delta_jour = Math.floor(delta_secondes/(60*60*24));
	var delta_heure = Math.floor((delta_secondes-(delta_jour*60*60*24))/3600);
	var delta_minute = Math.floor ((delta_secondes-(delta_jour*60*60*24+delta_heure*3600))/60);
	var delta_seconde = Math.floor (delta_secondes-(delta_jour*60*60*24+delta_heure*3600+delta_minute*60));
	var resultat ="Jours : "+ delta_jour+" Heures : "+delta_heure+" Minutes : " +delta_minute+" Secondes : "+ delta_seconde;
	
	document.getElementById ("chronos").innerHTML= resultat;
	var tempura = setTimeout("Megazord();", 1000);
}

// Document ready
$(document).ready(function(){

	console.log("Belleville En Vrai - Edition 2016");
	console.log("_blank Team");
	
	Megazord();
	initialize(); 
});