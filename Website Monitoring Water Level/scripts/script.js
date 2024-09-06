// Mendapatkan data dari Firebase dan menampilkannya di elemen HTML
const ambilWaterlevel = document.querySelector(`[data-button="ambilWaterlevel"]`);
const ambilPPM = document.querySelector(`[data-button="ambilPPM"]`);
const hasilWater = document.querySelector(`[data-firebase="hasilWater"]`);
const hasilPPM = document.querySelector(`[data-firebase="hasilPPM"]`);


////////Pengambilan data pH////////
function ambilDataWaterlevel() {
    firebase.database().ref('Monitoring/1').limitToFirst(2).orderByKey().once("value", (snap) => {
        hasilWater.innerHTML = (`
            <div>${snap.val().waterlevel}</div>
        `);
    });
}

//////////Pengambilan data PPM//////
function ambilDataPPM() {
    firebase.database().ref('Monitoring/1').limitToFirst(1).orderByKey().once("value", (snap) => {
        hasilPPM.innerHTML = (`
            <div>${snap.val().NilaiPPM}</div>
        `);
    });
}

ambilWaterlevel.onclick = () => {
    // Hapus tombol "ambilPH"
    ambilWaterlevel.remove();
    // Panggil fungsi untuk mengambil data pH
    ambilDataWaterlevel();
    // Atur refresh otomatis setiap 5 detik
    setInterval(() => {
        ambilDataWaterlevel();
    }, 5000); // 5000 milidetik = 5 detik
}

ambilPPM.onclick = () => {
    // Hapus tombol "ambilPPM"
    ambilPPM.remove();
    // Panggil fungsi untuk mengambil data PPM
    ambilDataPPM();
    // Atur refresh otomatis setiap 5 detik
    setInterval(() => {
        ambilDataPPM();
    }, 5000); // 5000 milidetik = 5 detik
}

