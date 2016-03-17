// _blank Team


/* GOOGLE MAPS */
function initialize() {

	var canvas = document.getElementById("map_canvas"),
	      position = {
	        lat: 48.870615,
	        lng : 2.382143
	      },
	      map = new google.maps.Map(canvas, {
	        zoom: 14,
	        center: position,
	        mapTypeId: google.maps.MapTypeId.ROADMAP
	  });
	
	
	  var marker = new google.maps.Marker({
	    position: position,
	    map: map,
	    title: 'Hello World!'
	  });
	
	  var infowindow = new google.maps.InfoWindow({
	    content: "21 rue Morêt, Paris, 75 011, FR "
	  });
	
	  marker.addListener('click', function() {
	    infowindow.open(map, marker);
	  });
	  var marker2 = new google.maps.Marker({
	    position: { lat : 48.870449, lng : 2.384612},
	    map: map,
	    title: 'Parc de belleville !'
	  });
	  var infowindow2 = new google.maps.InfoWindow({
	    content: "Voici le parc de belleville YES "
	  });
	  marker2.addListener('click', function() {
	    infowindow2.open(map, marker2);
	  });
}

/* TIMER */	      
function Megazord () {

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