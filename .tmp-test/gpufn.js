function normalisasiNamaGpu(nama) {
    return String(nama)
        .toLowerCase()
        .replace(/[^a-z0-9]/g, ''); // buang spasi, tanda hubung, titik, kurung
}

// Hitung berapa karakter dari "pendek" yang muncul berurutan di "panjang".
// Dipakai untuk mendeteksi kemiripan seperti "adreno730" vs "adreno73".
function panjangSubstringBersama(pendek, panjang) {
    let terbaik = 0;
    let saatIni = 0;
    for (let i = 0; i < pendek.length; i++) {
        const posisi = panjang.indexOf(pendek[i], saatIni);
        if (posisi === -1) {
            saatIni = 0;
            continue;
        }
        saatIni = posisi + 1;
        terbaik = Math.max(terbaik, saatIni);
    }
    return terbaik;
}

// Ranking kandidat:.skala 0-100. Semakin tinggi semakin yakin cocok.
// Exact > prefix > substring > token > fuzzy. Kalau seri, nama paling panjang menang.
function skorKecocokan(namaDb, ketikanUser) {
    if (namaDb === ketikanUser) return 1000;

    // 1. Persis sebagai prefix (mis. "adreno" -> "adreno730")
    if (namaDb.startsWith(ketikanUser)) {
        return 900 - Math.min(90, namaDb.length - ketikanUser.length);
    }
    // 2. Ketikan user adalah prefix dari nama db
    if (ketikanUser.startsWith(namaDb)) {
        return 850 - Math.min(90, ketikanUser.length - namaDb.length);
    }
    // 3. Nama db memuat ketikan user di tengah (mis. "mali" -> "mali-g710")
    if (namaDb.includes(ketikanUser)) {
        return 700 - Math.min(90, namaDb.length - ketikanUser.length);
    }
    // 4. Ketikan user memuat nama db di tengah
    if (ketikanUser.includes(namaDb)) {
        return 650 - Math.min(90, ketikanUser.length - namaDb.length);
    }

    // 5. Fuzzy: hitung substring bersama terpanjang.
    // Hanya berlaku kalau sebagian besar dari ketikan user benar-benar ada,
    // supaya "adreno" tidak dicocokkan ke "mali" atau "powervr".
    const bersama = panjangSubstringBersama(ketikanUser, namaDb);
    const rasio = bersama / ketikanUser.length;
    if (rasio >= 0.75 && bersama >= 4) {
        return 400 + Math.round(rasio * 100) - Math.min(90, namaDb.length - bersama);
    }
    return 0;
}

// Cari GPU di database yang paling cocok dengan ketikan user.
// Mengembalikan { tier, nama, skor } atau null kalau tidak ada yang cukup yakin.
function carikanTierGpu(ketikanUser, database) {
    const target = normalisasiNamaGpu(ketikanUser);
    if (!target) return null;

    let terbaik = null;
    for (const namaGpuAsli in database) {
        const namaDb = normalisasiNamaGpu(namaGpuAsli);
        const skor = skorKecocokan(namaDb, target);
        if (skor <= 0) continue;

        // Tie-break: skor sama -> nama db paling panjang & paling spesifik menang.
        if (!terbaik
            || skor > terbaik.skor
            || (skor === terbaik.skor && namaDb.length > terbaik.nama.length)) {
            terbaik = { tier: database[namaGpuAsli], nama: namaGpuAsli, skor: skor };
        }
    }

    // Ambang minimal: jangan pernah menebak. Kalau tidak yakin -> "tidak ditemukan".
    if (!terbaik || terbaik.skor < 300) return null;
    return terbaik;
}


module.exports={carikanTierGpu,skorKecocokan,normalisasiNamaGpu};
