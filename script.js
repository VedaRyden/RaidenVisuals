// ===================== SISTEM GANTI BAHASA (i18n) =====================
let translations = { id: {}, en: {} };
let currentLang = localStorage.getItem('raidenLang') === 'en' ? 'en' : 'id';
let languageFilesReady = false;

// Semua terjemahan disimpan di locales/id.json dan locales/en.json.
function loadLanguageFiles() {
    return Promise.all(['id', 'en'].map(function (lang) {
        return fetch('locales/' + lang + '.json')
            .then(function (response) {
                if (!response.ok) throw new Error('Gagal memuat locales/' + lang + '.json');
                return response.json();
            })
            .then(function (data) {
                translations[lang] = data;
            });
    })).then(function () {
        languageFilesReady = true;
        applyLanguage(currentLang);
    }).catch(function (error) {
        console.error('Gagal memuat file bahasa:', error);
        // Keep the page readable using the Indonesian text already present in the HTML.
        languageFilesReady = true;
        translations = { id: {}, en: {} };
        document.documentElement.setAttribute('lang', currentLang);
    });
}

// Ambil terjemahan aktif; teks Indonesia menjadi fallback jika sebuah kunci belum tersedia.
function t(key) {
    const el = document.querySelector('[data-i18n="' + key + '"]');
    return (translations[currentLang] && translations[currentLang][key])
        || (translations.id && translations.id[key])
        || (el && el.getAttribute('data-i18n-fallback'))
        || key;
}

// Terapkan bahasa ke elemen yang memiliki atribut data-i18n terkait.
function applyLanguage(lang) {
    currentLang = (lang === 'en') ? 'en' : 'id';
    localStorage.setItem('raidenLang', currentLang);
    document.documentElement.setAttribute('lang', currentLang);

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
        el.textContent = t(el.getAttribute('data-i18n'));
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
        const key = el.getAttribute('data-i18n-html');
        const translated = translations[currentLang] && translations[currentLang][key];
        el.innerHTML = translated || el.getAttribute('data-i18n-html-fallback') || key;
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
        el.setAttribute('placeholder', t(el.getAttribute('data-i18n-placeholder')));
    });

    // Perbarui dropdown bahasa (ikon globe): kode bahasa aktif + tanda centang di menu
    const langCurrentText = document.getElementById('langCurrentText');
    if (langCurrentText) langCurrentText.textContent = currentLang.toUpperCase();
    const langDropdownBtn = document.getElementById('langDropdownBtn');
    if (langDropdownBtn) {
        langDropdownBtn.setAttribute('aria-label', currentLang === 'en'
            ? 'Change language (current: English)'
            : 'Ganti bahasa (saat ini: Bahasa Indonesia)');
    }
    document.querySelectorAll('[data-lang-option]').forEach(function (opt) {
        opt.setAttribute('aria-checked', opt.getAttribute('data-lang-option') === currentLang ? 'true' : 'false');
    });
}

function setLanguage(lang) {
    if (!languageFilesReady) return;
    applyLanguage(lang);
    document.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang: currentLang } }));
}

window.currentLang = currentLang;
window.t = t;
window.applyLanguage = applyLanguage;
window.setLanguage = setLanguage;

function initializeComparisonSliders() {
    document.querySelectorAll('[data-comparison-slider]').forEach(function (slider) {
        const range = slider.querySelector('.comparison-range');
        const divider = slider.querySelector('.comparison-divider');
        let dragging = false;

        function setPosition(clientX) {
            const rect = slider.getBoundingClientRect();
            const percent = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
            const split = percent + '%';
            slider.style.setProperty('--split', split);
            divider.style.left = split;
            range.value = String(Math.round(percent));
        }

        slider.addEventListener('pointerdown', function (event) {
            dragging = true;
            slider.setPointerCapture(event.pointerId);
            setPosition(event.clientX);
            event.preventDefault();
        });
        slider.addEventListener('pointermove', function (event) {
            if (dragging) setPosition(event.clientX);
        });
        slider.addEventListener('pointerup', function () { dragging = false; });
        slider.addEventListener('pointercancel', function () { dragging = false; });
        range.addEventListener('input', function () { setPositionFromRange(); });

        function setPositionFromRange() {
            const split = range.value + '%';
            slider.style.setProperty('--split', split);
            divider.style.left = split;
        }
    });
}
document.addEventListener('DOMContentLoaded', function () {
    // Dropdown bahasa (globe): buka/tutup, pilih bahasa, klik luar & Escape untuk menutup
    const langDropdown = document.getElementById('langDropdown');
    const langDropdownBtn = document.getElementById('langDropdownBtn');
    if (langDropdown && langDropdownBtn) {
        langDropdownBtn.addEventListener('click', function (event) {
            event.stopPropagation(); // Cegah klik ini langsung dianggap "klik di luar dropdown"
            const sedangTerbuka = langDropdown.classList.toggle('is-open');
            langDropdownBtn.setAttribute('aria-expanded', sedangTerbuka ? 'true' : 'false');
            if (sedangTerbuka) tutupHeaderMoreDropdown(); // Hanya satu dropdown yang boleh terbuka
        });
        langDropdown.querySelectorAll('[data-lang-option]').forEach(function (opt) {
            opt.addEventListener('click', function () {
                const soundClickEl = document.getElementById('soundClick');
                if (soundClickEl) {
                    soundClickEl.currentTime = 0;
                    soundClickEl.play().catch(() => {});
                }
                setLanguage(opt.getAttribute('data-lang-option'));
                tutupLangDropdown();
                langDropdownBtn.focus();
            });
        });
        document.addEventListener('click', function (event) {
            if (!langDropdown.contains(event.target)) tutupLangDropdown();
        });
        document.addEventListener('keydown', function (event) {
            if (event.key === 'Escape' && langDropdown.classList.contains('is-open')) {
                tutupLangDropdown();
                langDropdownBtn.focus();
            }
        });
    }
    loadLanguageFiles();
    initializeComparisonSliders();
});

// ===================== HEADER / NAVIGASI =====================
const siteHeader = document.querySelector('.site-header');
const headerToggle = document.getElementById('headerToggle');
const headerNav = document.getElementById('headerNav');
const headerMoreDropdown = document.getElementById('headerMoreDropdown');
const headerMoreBtn = document.getElementById('headerMoreBtn');

// Fungsi bantu untuk menutup dropdown "MORE" (Cek GPU/Changelog/Roadmap)
function tutupHeaderMoreDropdown() {
    if (headerMoreDropdown) headerMoreDropdown.classList.remove('is-open');
    if (headerMoreBtn) headerMoreBtn.setAttribute('aria-expanded', 'false');
}

// Fungsi bantu untuk menutup dropdown bahasa (ikon globe)
function tutupLangDropdown() {
    const dd = document.getElementById('langDropdown');
    const btn = document.getElementById('langDropdownBtn');
    if (dd) dd.classList.remove('is-open');
    if (btn) btn.setAttribute('aria-expanded', 'false');
}

if (siteHeader && headerToggle && headerNav) {
    // Buka/tutup menu mobile saat tombol hamburger diklik
    headerToggle.addEventListener('click', function () {
        const sedangTerbuka = siteHeader.classList.toggle('nav-open');
        headerToggle.setAttribute('aria-expanded', sedangTerbuka ? 'true' : 'false');
        tutupHeaderMoreDropdown(); // Pastikan dropdown "MORE" ikut tertutup tiap kali menu mobile dibuka/tutup
        tutupLangDropdown(); // Dropdown bahasa juga ikut tertutup
    });

    // Tutup menu mobile otomatis begitu salah satu link navigasi (selain tombol "MORE") diklik
    headerNav.querySelectorAll('.header-link:not(.header-more-btn), .header-dropdown-item').forEach(function (link) {
        link.addEventListener('click', function () {
            siteHeader.classList.remove('nav-open');
            headerToggle.setAttribute('aria-expanded', 'false');
            tutupHeaderMoreDropdown();
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

// Dropdown "MORE" -> berisi Cek GPU, Changelog, dan Roadmap
if (headerMoreDropdown && headerMoreBtn) {
    headerMoreBtn.addEventListener('click', function (event) {
        event.stopPropagation(); // Cegah klik ini langsung dianggap "klik di luar dropdown"
        const sedangTerbuka = headerMoreDropdown.classList.toggle('is-open');
        headerMoreBtn.setAttribute('aria-expanded', sedangTerbuka ? 'true' : 'false');
        if (sedangTerbuka) tutupLangDropdown(); // Hanya satu dropdown yang boleh terbuka
        headerMoreBtn.blur(); // Lepas fokus agar warna tombol tidak "nyangkut" di layar sentuh
    });

    // Klik di mana saja di luar dropdown -> otomatis tutup
    document.addEventListener('click', function (event) {
        if (!headerMoreDropdown.contains(event.target)) {
            tutupHeaderMoreDropdown();
        }
    });

    // Tekan tombol Escape -> tutup dropdown
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            tutupHeaderMoreDropdown();
        }
    });
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
// Payment destinations are centralized here for easy editing.
const PAYMENT_LINKS = {
    trakteer: 'https://trakteer.id/veda_raiden/shop/raiden-visuals-plus-bundle-oq8tT',
    kofi: 'https://ko-fi.com/s/c3af744444'
};
// Platform pembayaran per bahasa: Indonesia -> Trakteer, English -> Ko-fi.
const PAYMENT_PLATFORM_BY_LANG = { id: 'trakteer', en: 'kofi' };
const paymentOverlay = document.getElementById('paymentOverlay');
const paymentModalClose = document.getElementById('paymentModalClose');

function bukaOverlayPembayaran() {
    if (!paymentOverlay) return;
    // Tampilkan hanya platform yang sesuai bahasa aktif, lalu arahkan tombolnya ke link yang benar.
    const platform = PAYMENT_PLATFORM_BY_LANG[currentLang] || 'trakteer';
    paymentOverlay.querySelectorAll('[data-payment-platform]').forEach(function (card) {
        const aktif = card.getAttribute('data-payment-platform') === platform;
        card.hidden = !aktif;
        if (aktif) card.querySelector('.payment-continue-btn').href = PAYMENT_LINKS[platform];
    });
    paymentOverlay.classList.add('is-open');
    paymentOverlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

function tutupOverlayPembayaran() {
    if (!paymentOverlay) return;
    paymentOverlay.classList.remove('is-open');
    paymentOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

if (paymentOverlay) {
    document.querySelectorAll('[data-payment-selector]').forEach(function (button) {
        button.addEventListener('click', function (event) {
            event.preventDefault();
            bukaOverlayPembayaran();
        });
    });
    paymentModalClose.addEventListener('click', tutupOverlayPembayaran);
    paymentOverlay.addEventListener('click', function (event) {
        if (event.target === paymentOverlay) tutupOverlayPembayaran();
    });
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && paymentOverlay.classList.contains('is-open')) {
            tutupOverlayPembayaran();
        }
    });
}

if (document.getElementById('player')) {
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}
// 2. This function creates the <iframe> after the API code downloads
var player;
function onYouTubeIframeAPIReady() {
    if (!document.getElementById('player')) return;
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
if (socialContainer) {
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
}
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
        gpuResult.innerHTML = t('gpu.msgEmpty');
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
                    gpuResult.innerHTML = t('gpu.msgTier1');
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
                    gpuResult.innerHTML = t('gpu.msgTier2');
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
                    gpuResult.innerHTML = t('gpu.msgTier3');
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
                        gpuResult.innerHTML = t('gpu.msgTier4');
                    } else {
                        gpuResult.innerHTML = t('gpu.msgTier5');
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
                gpuResult.innerHTML = t('gpu.msgNotFound');
                gpuResult.className = "gpu-result-msg gpu-fail";
                gpuInput.classList.add('efek-gempa');
                setTimeout(() => {
                    gpuInput.classList.remove('efek-gempa');
                }, 300);
            }
        })
        .catch(error => {
            console.error("Gagal memuat database GPU:", error);
            gpuResult.innerHTML = t('gpu.msgFetchError');
            gpuResult.className = "gpu-result-msg gpu-fail";
            gpuResult.style.display = "block";
        });
}
// Jalankan fungsi jika tombol "Cek" di-klik
if (gpuCheckBtn && gpuInput) {
    gpuCheckBtn.addEventListener('click', periksaKompatibilitasGPU);
    // Jalankan fungsi jika user menekan tombol "Enter" di keyboard komputer
    gpuInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            periksaKompatibilitasGPU();
        }
    });
}
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