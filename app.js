function showAlert(msg) {
  alert(msg);
}

function beliPaket(paket) {
  alert("Kamu memilih paket " + paket + ". Proses pembelian akan dicatat.");
  let saldo = localStorage.getItem("saldo") || 0;
  saldo = parseInt(saldo) + 30000;
  localStorage.setItem("saldo", saldo);
  alert("Saldo harian kamu bertambah Rp 30.000");
}

function isiUlang() {
  let saldo = localStorage.getItem("saldo") || 0;
  saldo = parseInt(saldo) + 50000;
  localStorage.setItem("saldo", saldo);
  document.getElementById("saldo").innerText = saldo;
  alert("Saldo berhasil diisi Rp 50.000");
}

function penarikan() {
  let saldo = localStorage.getItem("saldo") || 0;
  if (saldo < 50000) {
    alert("Minimal penarikan Rp 50.000");
    return;
  }
  saldo = parseInt(saldo) - 50000;
  localStorage.setItem("saldo", saldo);
  document.getElementById("saldo").innerText = saldo;
  alert("Penarikan Rp 50.000 berhasil diproses.");
}

window.onload = () => {
  const saldoElem = document.getElementById("saldo");
  if (saldoElem) {
    saldoElem.innerText = localStorage.getItem("saldo") || 0;
  }
};
