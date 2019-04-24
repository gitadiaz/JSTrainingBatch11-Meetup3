// KHUSUS JS -> belom bikin deklarasi fungsi tapi bisa dipanggil duluan
// masakIndomie();

// INI BARU DEKLARASI, BELOM DIPANGGIL
function masakIndomie(variant, panci){
    // ini biasa disebut SCOPE, isinya:
    // PROSES..
    // PROSES..

    // var rasa= "sotomie";
    // console.log("masak air");
    // console.log("buka bungkus");
    // console.log("rebus mie");
    // console.log("aduk bumbu");

    if(variant== "goreng"){
        console.log("BUANG KUAH!!");
        return "indomie goreng"
    } else {
    // output, biasanya berupa value
    return "indomie enak variant " + variant + " dimasak dengan " + panci;}
}

// console.log("ini javascript..") 
// ini munculnya di inspect -> console (hanya pada chrome)

// EKSEKUSI / PANGGIL
// masakIndomie();
var mateng = masakIndomie("kari", "sharp");
console.log(mateng);

var mateng2 = masakIndomie("ayam bawang","samsung");
console.log(mateng2);

var mateng3= masakIndomie("goreng","LG");
console.log(mateng3);

// ANONYMOUS FUNCTION -> buat hoisting = mastiin gaada function yang dilempar ke atas. tapi tetap bagusan yg function biasa
var proses1 = function(){
    console.log("ini proses");
}