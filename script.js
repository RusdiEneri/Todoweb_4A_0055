const inputTugas = document.getElementById('inputTugas');
const btnTambah = document.getElementById('btnTambah');
const daftarTugas = document.getElementById('daftarTugas');
const inputTanggal = document.getElementById('inputTanggal'); //baru

btnTambah.addEventListener('click', function() {

    let teksTugas = inputTugas.value;
    let teksTanggal = inputTanggal.value;
    
    if (teksTugas === '' || teksTanggal === '') {
        alert('Nama tugas dan tanggalnya harus diisi!');
        return;
    }

    let listBaru = document.createElement('li');

    // let checkbox = document.createElement("input");
    // checkbox.type = "checkbox";
    // listbaru.appendChild(checkbox);

    // const containerTeks = document.createElement("div");
    // containerTeks.style.flex = "1";

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
    inputTanggal.value = "";

});