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

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    listBaru.appendChild(checkbox);

    // const containerTeks = document.createElement("div");
    // containerTeks.style.flex = "1";

    let spanTugas = document.createElement('span');
    spanTugas.innerHTML = teksTugas;
    listBaru.appendChild(spanTugas);

    let spanTanggal = document.createElement('small');
    spanTanggal.innerHTML =  ` (${teksTanggal}) `;
    listBaru.appendChild(spanTanggal);

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