function Jumlahkan() {
  angka1 = parseInt(document.getElementById("angka1").value);
  angka2 = parseInt(document.getElementById("angka2").value);
  Jumlahkan = angka1 + angka2;

  alert("Hasil Penjumlahan: " + Jumlahkan);
}

function Ulang() {
  document.getElementById("angka1").value = "";
  document.getElementById("angka2").value = "";

  alert("Telah Dihapus");
}
