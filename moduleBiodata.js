// Memanggil module node.js
var http = require('http');
var biodata = require('./modules/biodata');

// Deklarasi variabel
var nama = "Muhamad Ariel Fajar Maulana";
var tempatLahir = "Bekasi";
var tanggalLahir = "07 Juni 2005";
var alamat = "Kp. Rawa Semut No. 55 Kel. Margahayu Kec. Bekasi Timur Kota Bekasi";

// Menampilkan dalam console
console.log("Nama: " + biodata.getNama(nama));
console.log("Tempat Lahir: " + biodata.getTempatLahir(tempatLahir));
console.log('Tanggal Lahir: ' + biodata.getTanggalLahir(tanggalLahir));
console.log(`Alamat: ${biodata.getAlamat(alamat)}`);

// create server listening on 3000
http.createServer(function (req, res){
    res.writeHead(200, {'Content-Type':'text/html'});
    // untuk menampilkan di web server
    res.write(
    `<p>Nama: ${biodata.getNama(nama)}</p>
    <p>Tempat Lahir: ${biodata.getTempatLahir(tempatLahir)}</p>
    <p>Tanggal Lahir: ${biodata.getTanggalLahir(tanggalLahir)}</p>
    <p>Alamat: ${biodata.getAlamat(alamat)}</p>`
    );
    res.end();
}).listen(3000);