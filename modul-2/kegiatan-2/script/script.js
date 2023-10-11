var form = document.querySelector('form');
var nama = document.getElementById("nama");
var email = document.getElementById("email");
var alamat = document.getElementById("alamat");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (submit()) {
    alert("Berhasil dimasukkan datanya");
  }
});

function submit() {
  if (nama.value === "") {
    alert("Nama tidak boleh kosong");
    nama.focus();
    return false;
  }

  if (email.value === "") {
    alert("Email tidak boleh kosong");
    email.focus();
    return false;
  }

  if (alamat.value === "") {
    alert("Alamat tidak boleh kosong");
    alamat.focus();
    return false;
  }

  return true;
}
