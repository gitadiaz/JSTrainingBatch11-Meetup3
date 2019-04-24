var budi = {
    nama: "budi santosi",
    umur: 30,
    sudahMenikah: false,
    namaAyahKandung: "tono",
    friends: ["joni", "roni", "tina"],
    pekerjaan: {
        nama: "pegawai swasta",
        lokasi: "PIM",
    },
    sekolah: [],
};

budi.namaIbuKandung = "situ";

console.log(budi.namaIbuKandung);
console.log(budi.friends);

// buat nambah array yg ada di object
// budi.friends.push("moni");
// console.log(budi.friends);

console.log(budi.pekerjaan.nama);

// dalam array ada object
var students = [
    {
        nama : "budi",
        age: 15,
    },
    {
        nama : "toni",
        age: 14,
    },
    {
        nama : "mike",
        age: 12,
    },
];

var items = [
    {nama: "baju", harga: 50000, stok: 7,},
    {nama: "celana", harga: 30000, stok: 3, promo:true},
    {nama: "sepatu", harga: 60000, stok: 1,},
    {nama: "topi", harga: 40000, stok: 2,},
]

var jumlahItem = items.length;
for(var i = 0; i < jumlahItem; i++){
    console.log(items[i].promo);
}


