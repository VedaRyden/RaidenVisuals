// ===================== HEADER / NAVIGASI =====================
const siteHeader = document.querySelector('.site-header');
const headerToggle = document.getElementById('headerToggle');
const headerNav = document.getElementById('headerNav');

if (siteHeader && headerToggle && headerNav) {
    // Buka/tutup menu mobile saat tombol hamburger diklik
    headerToggle.addEventListener('click', function () {
        const sedangTerbuka = siteHeader.classList.toggle('nav-open');
        headerToggle.setAttribute('aria-expanded', sedangTerbuka ? 'true' : 'false');
    });

    // Tutup menu mobile otomatis begitu salah satu link navigasi diklik
    headerNav.querySelectorAll('.header-link').forEach(function (link) {
        link.addEventListener('click', function () {
            siteHeader.classList.remove('nav-open');
            headerToggle.setAttribute('aria-expanded', 'false');
        });
    });

    // Beri bayangan lebih tegas pada header setelah halaman digulir sedikit
    window.addEventListener('scroll', function () {
        if (window.scrollY > 10) {
            siteHeader.classList.add('header-scrolled');
        } else {
            siteHeader.classList.remove('header-scrolled');
        }
    }, { passive: true });
}

// Ambil elemen audio dari HTML
const soundClick = document.getElementById('soundClick');
// Ambil semua tombol link launcher yang memiliki class 'launcher-btn'
const launcherButtons = document.querySelectorAll('.launcher-btn');
// Berikan fungsi klik suara ke setiap tombol secara otomatis
launcherButtons.forEach(button => {
    button.addEventListener('click', function(event) {
        // Putar suara dari awal setiap kali diklik
        soundClick.currentTime = 0;
        soundClick.play();
    });
});
// 2. FITUR OVERLAY KONFIRMASI SAAT KLIK DOWNLOAD (pengganti alert())
const downloadButtons = document.querySelectorAll('.download-btn');
const downloadOverlay = document.getElementById('downloadOverlay');
const downloadModalText = document.getElementById('downloadModalText');
const downloadModalConfirm = document.getElementById('downloadModalConfirm');
const downloadModalCancel = document.getElementById('downloadModalCancel');
const downloadModalClose = document.getElementById('downloadModalClose');

function bukaOverlayDownload(fileName, linkAsli) {
    downloadModalText.innerHTML = `Kamu akan memasuki Link Vertise untuk mengunduh <strong>"${fileName}"</strong>. Harap berhati-hati dengan iklannya.`;
    downloadModalConfirm.setAttribute('href', linkAsli);
    downloadOverlay.classList.add('is-open');
    downloadOverlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

function tutupOverlayDownload() {
    downloadOverlay.classList.remove('is-open');
    downloadOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

if (downloadOverlay) {
    downloadButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault(); // Cegah pindah tab dulu, tampilkan overlay konfirmasi
            const fileName = this.parentElement.querySelector('.file-name').textContent;
            const linkAsli = this.getAttribute('href');
            soundRelease.currentTime = 0;
            soundRelease.play();
            bukaOverlayDownload(fileName, linkAsli);
        });
    });

    // Tombol "Lanjutkan" -> lanjut ke link asli (target="_blank") lalu tutup overlay
    downloadModalConfirm.addEventListener('click', function () {
        soundClick.currentTime = 0;
        soundClick.play();
        tutupOverlayDownload();
    });

    // Tombol "Batal" dan tombol silang (X) -> tutup overlay tanpa mengunduh
    downloadModalCancel.addEventListener('click', tutupOverlayDownload);
    downloadModalClose.addEventListener('click', tutupOverlayDownload);

    // Klik di area gelap luar kotak modal -> tutup overlay
    downloadOverlay.addEventListener('click', function (event) {
        if (event.target === downloadOverlay) {
            tutupOverlayDownload();
        }
    });

    // Tekan tombol Escape -> tutup overlay
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && downloadOverlay.classList.contains('is-open')) {
            tutupOverlayDownload();
        }
    });
}
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
// 2. This function creates the <iframe> after the API code downloads
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '390',
        width: '640',
        videoId: 'dQw4w9WgXcQ', // Replace with your YouTube Video ID
        playerVars: {
            'controls': 0, // Hides default YouTube controls so our custom UI works
            'rel': 0
        },
        events: {
            'onReady': onPlayerReady
        }
    });
}
// 3. FITUR SOSIAL MEDIA CONTAINER (HALUS)
const socialContainer = document.querySelector('.social-media-container');
let scrollStopTimer;
window.addEventListener('scroll', function() {
    // Tambahkan kelas hilangnya transisi halus begitu user mulai scroll
    socialContainer.classList.add('social-fade-out');
    // Reset timer setiap kali event scroll terpicu
    clearTimeout(scrollStopTimer);
    // Setelah user BERHENTI scroll selama 300ms, munculkan kembali secara halus
    scrollStopTimer = setTimeout(function() {
        socialContainer.classList.remove('social-fade-out');
    }, 1500);
}, { passive: true });
// 4. SISTEM CEK KOMPATIBILITAS GPU
const gpuInput = document.getElementById('gpuInput');
const gpuCheckBtn = document.getElementById('gpuCheckBtn');
const gpuResult = document.getElementById('gpuResult');
const soundSalah = document.getElementById('soundSalah');
const soundGagal = document.getElementById('soundGagal');
const soundWarn = document.getElementById('soundWarn');
const soundSukses = document.getElementById('soundSukses');
const soundRelease = document.getElementById('soundRelease')
soundSalah.volume = 0.2; // Mengecilkan volume suara ERROR menjadi 30% saja
soundGagal.volume = 0.2; // Mengecilkan volume suara GAGAL (Tier 1 & 2) menjadi 40% saja
soundWarn.volume = 0.6;
soundSukses.volume = 0.5; // Mengecilkan volume suara SUKSES (Tier 3 & 4) menjadi 40% saja
soundRelease.volume = 0.5;
soundClick.volume = 0.3; // Mengecilkan volume suara klik tombol menjadi 30% saja
// Fungsi utama untuk memeriksa kecocokan GPU
function periksaKompatibilitasGPU() {
    // Ambil ketikan user, hapus spasi kosong, dan ubah ke huruf kecil agar pencarian fleksibel
// Menghapus semua tanda minus (-) DAN menghapus semua jenis spasi kosong, lalu ubah ke huruf kecil
// Mengubah tanda minus (-) menjadi kosong DAN menghapus semua spasi pada nama GPU dari database JSON
let ketikanUser = gpuInput.value.replace(/-/g, '').replace(/\s+/g, '').toLowerCase();

    if (ketikanUser === "" || ketikanUser.length <= 5) {
        soundSalah.pause(); soundSalah.currentTime = 0;
        gpuInput.classList.remove('efek-cahaya-hijau');
        gpuInput.classList.remove('outline-kuning'); // Hapus kuning karena salah isi
        gpuInput.classList.remove('outline-hijau'); // Hapus hijau karena salah isi
        soundSalah.play(); // KODE BARU: Putar suara salah ketik
        gpuResult.innerHTML = 'Silakan ketik nama GPU nya dulu woilah!<br><img src="img/woylahcik.webp" class="result-sticker">';
        gpuResult.className = "gpu-result-msg gpu-fail";
        gpuInput.classList.add('efek-gempa');
                setTimeout(() => {
                    gpuInput.classList.remove('efek-gempa');
                }, 300);
        gpuResult.style.display = "block";
        return;
    }
    // Ambil data dari file tiers.json di repositori GitHub Anda
    fetch('tiers.json')
        .then(response => response.json())
        .then(data => {
            let ditemukan = false;
            let nomorTier = 0;
            // Lakukan perulangan untuk mencocokkan ketikan user dengan database GPU
            for (let namaGpuAsli in data) {
                let namaGpuSistem = namaGpuAsli.replace(/\s+/g,'').toLowerCase();
                if (namaGpuSistem.includes(ketikanUser) || ketikanUser.includes(namaGpuSistem)) {
                    ditemukan = true;
                    nomorTier = data[namaGpuAsli];
                    break;
                }
            }
            // Tampilkan hasil berdasarkan aturan kustom Tier Vibrant Visuals
            gpuResult.style.display = "block";
            if (ditemukan) {
                soundSukses.pause(); soundSukses.currentTime = 0;
                soundGagal.pause(); soundGagal.currentTime = 0;
                if (nomorTier === 1) {
                    gpuInput.classList.remove('efek-cahaya-hijau');
                    gpuInput.classList.remove('outline-hijau'); // Hapus hijau karena salah isi
                    gpuInput.classList.remove('outline-kuning'); // Hapus kuning karena salah isi
                    gpuInput.classList.add('outline-merah'); // KODE BARU: Nyalakan outline merah
                    soundGagal.play(); // KODE BARU: Putar suara gagal
                    // TIER 1: TIDAK KOMPATIBEL (Warna Merah)
                    gpuResult.innerHTML = `❌ Tidak Kompatibel! GPU mu terdeteksi di Tier 1. Sebaiknya ganti HP atau beli HP baru yang spek nya lebih bagus, GPU ini terlalu kuno buat sekarang.<br><img src="img/mkvvgaksupport.webp" class="result-sticker">`;
                    gpuResult.className = "gpu-result-msg gpu-fail";
                    // KODE BARU: Hanya teks hasil jawaban yang gempa
                    gpuResult.classList.add('efek-gempa');
                    setTimeout(() => {
                        gpuResult.classList.remove('efek-gempa');
                    }, 300);
                } 
                else if (nomorTier === 2) {
                    gpuInput.classList.remove('efek-cahaya-hijau');
                    gpuInput.classList.remove('outline-hijau'); // Hapus hijau karena salah isi
                    gpuInput.classList.remove('outline-kuning'); // Hapus kuning karena salah isi
                    gpuInput.classList.add('outline-merah'); // KODE BARU: Nyalakan outline merah
                    soundGagal.play(); // KODE BARU: Putar suara gagal
                    // TIER 2: TIDAK KOMPATIBEL (Warna Merah)
                    gpuResult.innerHTML = `❌ Tidak Kompatibel! GPU mu terdeteksi di Tier 2. Yang sabar ya semoga bisa dibelikan HP baru Aamiin ^^.<br><img src="img/mkvvgaksupport.webp" class="result-sticker">`;
                    gpuResult.className = "gpu-result-msg gpu-fail";
                    // KODE BARU: Hanya teks hasil jawaban yang gempa
                    gpuResult.classList.add('efek-gempa');
                    setTimeout(() => {
                        gpuResult.classList.remove('efek-gempa');
                    }, 300);
                } 
                else if (nomorTier === 3) {
                    soundWarn.play(); // KODE BARU: Putar suara peringatan
                    gpuInput.classList.remove('efek-cahaya-hijau');
                    gpuInput.classList.remove('outline-hijau'); // Hapus hijau karena salah isi
                    gpuInput.classList.remove('outline-merah'); // Hapus merah karena salah isi
                    gpuInput.classList.add('outline-kuning'); // KODE BARU: Nyalakan outline kuning
                    // TIER 3: KEMUNGKINAN KOMPATIBEL (Warna Oranye/Kuning)
                    gpuResult.innerHTML = `⚠️ Kemungkinan Kompatibel! GPU mu berada di Tier 3. Kalau masih tidak bisa pasti kedepannya bakal bisa karena GPU ini masih memiliki harapan, tetapi performa FPS bisa bervariasi tergantung kondisi perangkat.<br><img src="img/yondaktau.webp" class="result-sticker">`;
                    gpuResult.className = "gpu-result-msg gpu-warning";
                    // KODE BARU: Hanya teks hasil jawaban yang gempa
                    gpuResult.classList.add('efek-gempa');
                    setTimeout(() => {
                        gpuResult.classList.remove('efek-gempa');
                    }, 300);
                } 
                else if (nomorTier === 4 || nomorTier === 5) {
                    soundSukses.play(); // KODE BARU: Putar suara sukses
                    // Reset animasi dengan menghapus kelas lama (jika ada) agar bisa terpicu ulang
                    gpuInput.classList.remove('efek-cahaya-hijau');
                    // Trik kecil memicu ulang animasi di browser (trigger reflow)
                    void gpuInput.offsetWidth;
                    // KODE UTAMA: Tambahkan kembali efek cahaya hijau fade out
                    gpuInput.classList.add('efek-cahaya-hijau'); 
                    // Tier 4 & 5: PASTI KOMPATIBEL (Warna Hijau)
                    gpuInput.classList.remove('outline-kuning'); // Hapus kuning karena salah isi
                    gpuInput.classList.remove('outline-merah'); // Hapus merah karena salah isi
                    gpuInput.classList.add('outline-hijau'); // KODE BARU: Nyalakan outline hijau
                    if (nomorTier === 4) {
                        gpuResult.innerHTML = `✅ SELAMAT! GPU Anda Sudah Kompatibel! GPU mu berada di Tier 4. Vibrant Visuals akan berjalan cukup lancar dan optimal di hpmu!<br><img src="img/cihuy.webp" class="result-sticker">`;
                    } else {
                        gpuResult.innerHTML = `🌟😮✅ Njir HP Gaming Coeg, GPU mu berada di Tier 5. Vibrant Visuals sudah pasti akan berjalan dengan lancar dan optimal di hp gamingmu!<br><img src="img/cihuy.webp" class="result-sticker">`;
                    }
                    gpuResult.className = "gpu-result-msg gpu-success";
                    
                }
                } else {
                soundSalah.pause(); soundSalah.currentTime = 0;
                soundSalah.play(); // KODE BARU: Putar suara salah ketik
                // Jika salah isi / tidak ditemukan (Efek gempa kemarin)
                gpuInput.classList.remove('outline-hijau'); // Hapus hijau karena salah isi
                gpuInput.classList.remove('outline-kuning'); // Hapus kuning karena salah isi
                gpuInput.classList.remove('efek-cahaya-hijau');
                gpuResult.innerHTML = '😐 GPU apa ini woy? tolong ketikan nya diperhatikan yah. Pastikan penulisan nama tipe GPU nya sudah benar (Contoh: Adreno 610).<br><img src="img/woylahcik.webp" class="result-sticker">';
                gpuResult.className = "gpu-result-msg gpu-fail";
                gpuInput.classList.add('efek-gempa');
                setTimeout(() => {
                    gpuInput.classList.remove('efek-gempa');
                }, 300);
            }
        })
        .catch(error => {
            console.error("Gagal memuat database GPU:", error);
            gpuResult.innerHTML = 'Terjadi gangguan sistem saat membaca database.<br><img src="img/waduh.webp" class="result-sticker">';
            gpuResult.className = "gpu-result-msg gpu-fail";
            gpuResult.style.display = "block";
        });
}
// Jalankan fungsi jika tombol "Cek" di-klik
gpuCheckBtn.addEventListener('click', periksaKompatibilitasGPU);
// Jalankan fungsi jika user menekan tombol "Enter" di keyboard komputer
gpuInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        periksaKompatibilitasGPU();
    }
});
// Fungsi untuk menyalin teks jalur folder saat diklik
function copyPath(element) {
    const textToCopy = element.innerText;
    
    // Menyalin teks ke clipboard system
    navigator.clipboard.writeText(textToCopy).then(() => {
        // Mainkan efek suara klik jika Anda ingin menghubungkannya dengan audio kemarin
        const soundClick = document.getElementById('soundClick');
        if (soundClick) {
            soundClick.currentTime = 0;
            soundClick.play().catch(() => {});
        }

        // Mengubah tampilan sementara sebagai indikator sukses menyalin
        const originalText = element.innerText;
        element.classList.add('copied');
        
        // Kembalikan ke tampilan semula setelah 1.5 detik
        setTimeout(() => {
            element.classList.remove('copied');
        }, 1500);
    }).catch(err => {
        console.error('Gagal menyalin teks: ', err);
    });
}