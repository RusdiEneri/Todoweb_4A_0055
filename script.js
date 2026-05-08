const inputTugas = document.getElementById('inputTugas');
const btnTambah = document.getElementById('btnTambah');
const daftarTugas = document.getElementById('daftarTugas');
const inputTanggal = document.getElementById('inputTanggal');

btnTambah.addEventListener('click', function() {
    
    let teksTugas = inputTugas.value;

    if (teksTugas === '') {
        alert('Tolong masukkan tugas!');
        return;
    }

    let listBaru = document.createElement('li');
    let spanBaru = document.createElement('span');
    
    spanBaru.innerHTML = teksTugas;

    listBaru.appendChild(spanBaru);

    daftarTugas.appendChild(listBaru);

    const warnaBaru = document.querySelectorAll('li');
    warnaBaru.forEach((item, index) => {
        if (index % 2 === 0) {
            item.style.color = "blue";
        } else {
            item.style.color = "green";
        }
    })

    inputTugas.value = "";

});