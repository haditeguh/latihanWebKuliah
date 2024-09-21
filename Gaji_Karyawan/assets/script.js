function data() {
    var ambilJabatan = document.getElementById('jabatan').value;
    var ambilGajiPokok;
    if (ambilJabatan == "DIREKTUR") {
        ambilGajiPokok = 4500000;
    }
    else if (ambilJabatan == "KABAG") {
        ambilGajiPokok = 3500000;
    }
    else if (ambilJabatan == "STAFF") {
        ambilGajiPokok = 2500000;
    }
    else {
        ambilGajiPokok = 1800000;
    }

    document.getElementById('gajiPokok').innerHTML="&emsp; : Rp "+ambilGajiPokok;


    var ambilJumlahHariKerja = document.getElementById('jumlahHariKerja').value;
    var ambilTransport;
    ambilTransport = ambilJumlahHariKerja * 25000;

    document.getElementById('uangTransport').innerHTML="&emsp; : Rp "+ambilTransport;

    var ambilGajiPokok;
    var ambilPotonganBPJS;
    ambilPotonganBPJS = ambilGajiPokok * 0.05

    document.getElementById('potonganBPJS').innerHTML="&emsp; : Rp "+ambilPotonganBPJS;

    var ambilGajiPokok;
    var ambilPotonganBPJS;
    var ambilTransport;
    var ambilGajiBersih;

    ambilGajiBersih = (ambilGajiPokok - ambilPotonganBPJS) + ambilTransport;

    document.getElementById('gajiBersih').innerHTML="&emsp; : Rp "+ambilGajiBersih;
}