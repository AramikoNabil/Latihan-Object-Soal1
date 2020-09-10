//*Object Pertama
const kucingPondok =
  // Properti
  {
    nama: "Kucil",
    warna: "Putih dan Abu- Abu",
    // Method
    sifat: function () {
      document.write("Kucing Jinak ,Sedikit Sombong");
    },
  };
// cetak
kucingPondok.sifat();
console.log(kucingPondok.nama);
console.log(kucingPondok.warna);
// // **

// //*Obejct Kedua
const jembatan =
  // Properti
  {
    nama: "Jembatan Barito",
    Panjang: "2 km",
    // Methode
    kondisi: function () {
      document.write("Sedang Peremajaan");
    },
  };
// cetak
jembatan.kondisi();
console.log(jembatan.nama);
console.log(jembatan.Panjang);
// // **

// // *Object Ketiga
const pulpen =
  // Properti
  {
    nama: "Standar",
    warna: "Hitam",
    // Methode
    nulis: function () {
      document.write("Alhamdulillah tidak macet");
    },
  };
// cetak
pulpen.nulis();
console.log(pulpen.nama);
console.log(pulpen.warna);

// // Object Keempat
const microwave = new Object();
// Properti
(microwave.nama = "Panasonic"), (microwave.tipe = "43%454");
// Cetak
console.log(microwave.nama, microwave.tipe);

// Obejct kelima
const blender =
  // Properti & Method
  {
    tes: function () {
      console.log("Ini Blender " + this.nama + " bukan " + this.saingan);
    },
  };
// properti
const merek = Object.create(blender);

merek.nama = "Sharp";
merek.saingan = "Panasonic";
merek.tes();
