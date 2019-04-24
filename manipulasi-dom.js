var planetList = document.getElementById("planet-list");

// planetList.textContent ....

// innerhtml - bikin tag html dalam string
// tapi ini ga recomended  untuk yg kompleks
// innerhtml jatohnya kayak nimpa
// planetList.innerHTML = "<h1>ini teks h1</h1><h2> halo</h2>";

// var planet1 = document.createElement("LI");
// // var isiPlanet1 = document.createAttribute
// // atau
// planet1.textContent ="Bumi";
// var planet2 = document.createElement("LI");
// planet2.textContent="Venus";
// var planet3 = document.createElement("LI");
// planet3.textContent="aaa";

// // planet1.appendChild(isiPlanet1);
// planetList.appendChild(planet1);
// planetList.appendChild(planet2);
// planetList.appendChild(planet3);

// var baris
var baris1 = document.createElement("TR");
var kolom1 = document.createElement("TD");
kolom1.textContent ="Bumi"
baris1.appendChild(kolom1);

var kolom2 = document.createElement("TD");
kolom2.textContent ="10000"
baris1.appendChild(kolom2);



