function beli(nama, harga) {
    localStorage.setItem("namaKopi", nama);
    localStorage.setItem("hargaKopi", harga);

    window.location.href = "checkout.html";
}
