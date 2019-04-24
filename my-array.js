// var students = ["budi", "bayu", "indra", "michael"];

// untuk kasus student nomor 4 sedang ga masuk kelas-> pake undefined, tapi harus hati2
// var students = ["budi", "bayu", "indra", "michael", undefined, "udin"];
var students = ["budi", "bayu", "indra", "michael", undefined, "udin"];

var scores = ["80", "100", "65", "45"];

// pake index buat manggil salah satu students
// kalo manggil yang gaada indexnya, outputnya -> undefined
// console.log(students[1]);
// console.log(students.length);

// var nama = "joni"
// console.log(nama.length);

// kalo mau nambahin data ke array
// students.push("uya"); // masukin dari belakang
// console.log(students);

// students.unshift("loni"); // masukin dari depan
// console.log(students);

// kalo mau hapus data
// students.pop(); // yang keapus adalah data terakhir
// console.log(students);

// students.shift(); // yang keapus dari depan
console.log(students);

// kalo mau buang yang di tengah
// students.splice(1, 0, 'yoni', "moni", "roni", "joni"); // index nomor 2 bisa diisi 0 (kalo ngga mau ngapus)
// splice bisa masukin data juga
// console.log(students);

// ARRAY ada dua:
// operasi array yang mengubah nilai -> push pop splice
// operasi array yang ga merubah nilai -> slice

var muridTop3 = students.slice(0,3); // mengiris sebagian dari array, dia ga ngubah nilai/data array nya
console.log(students);
console.log(muridTop3); // cuma mau tau orang dari 0-3 itu siapa aja

// SPLIT bukan Array, tapi punya string
var nama = "gita diaz pangesti"; 
console.log(nama.split("g")); // bakal misahin kalo ada spasi, atau huruf yg ada disitu, huruf yg disitu gaikutan ketulis (kebuang)



