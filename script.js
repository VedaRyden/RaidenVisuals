// ===================== SISTEM GANTI BAHASA (i18n) =====================
const translations = {
    id: {
        "nav.home": "Beranda",
        "nav.download": "Download",
        "nav.guide": "Panduan",
        "nav.gpu": "Cek GPU",
        "nav.changelog": "Changelog",
        "nav.pricing": "Harga",
        "nav.roadmap": "Roadmap",
        "nav.more": "Lainnya",
        "cta.download": "DOWNLOAD",
        "hero.title": "Raiden Visuals Free Download",
        "hero.subtitle": "Pilih salah satu untuk versi stable dan beta. Harap panduan instalasinya dibaca, ya.",
        "about.title": "Apa itu Raiden Visuals?",
        "about.desc": "Raiden Visuals Adalah Custom Deferred Configuration Yang Dapat Mengoptimalkan Performa Vibrant Visuals Pada Minecraft Bedrock.",
        "features.title": "Keunggulan",
        "features.item1": "Mengoptimalkan Bayangan Pada Vibrant Visuals.",
        "features.item2": "Mengoptimalkan Refleksi Ruang Layar Pada Vibrant Visuals.",
        "features.item3": "Mengoptimalkan Point Light Beserta Bayangan Pada Vibrant Visuals.",
        "features.item4": "Mengoptimalkan Kabut Volumetrik Pada Vibrant Visuals.",
        "features.item5": "Memperluas Opsi Jarak Render (Menjadi 1-50 Chunks).",
        "guide.title": "Panduan Instalasi",
        "guide.android": "ANDROID",
        "guide.androidIntro": "Untuk sistem operasi Android, diperlukan aplikasi pihak ketiga seperti MB Loader, Levi Launcher, Ambient For MCPE, atau Flarial Client agar Raiden Visual dapat berfungsi.",
        "guide.mbloader": "Untuk MB Loader, cukup memasang file mcpack yang diberikan, lalu launch dengan shader loader MBL2 atau Fuse(Beta).",
        "guide.levi": "Untuk Levi Launcher, perlu memasang MaterialBinLoader 2 agar Raiden Visuals dapat berfungsi.",
        "guide.ambient": "Untuk Ambient For MCPE, harus mengaktifkan fitur Shader Loader di dalam pengaturan launcher agar Raiden Visuals dapat berfungsi.",
        "guide.flarial": "Untuk Flarial Client, harus mengaktifkan fitur Shader Loader melalui Flarial shortcut (tombol mengambang dengan logo Flarial). Setelah mengaktifkan Shader Loader di Flarial Client, wajib restart Flarial Client agar Raiden Visuals dapat berfungsi.",
        "guide.windows": "WINDOWS",
        "guide.windowsIntro": 'Untuk sistem operasi Windows atau Linux, cukup memindahkan folder "renderer" di dalam file mcpack yang diberikan, lalu tempelkan di lokasi.',
        "guide.stablePath": 'Untuk Minecraft Bedrock versi stable, buka isi folder "subpacks\\OfficialFix" lalu pindahkan folder "renderer" nya ke <code class="copyable-path" onclick="copyPath(this)">C:\\XboxGames\\Minecraft for Windows\\Content\\data</code>',
        "guide.previewPath": 'Untuk Minecraft Bedrock versi preview, tidak perlu memindahkan renderer didalam folder subpacks, langsung pindahkan folder "renderer" nya ke <code class="copyable-path" onclick="copyPath(this)">C:\\XboxGames\\Minecraft Preview for Windows\\Content\\data</code>',
        "gpu.title": "Pengecekan GPU untuk android",
        "gpu.boxTitle": "Cek Kompatibilitas GPU HP-Mu:",
        "gpu.placeholder": "Contoh: Adreno 610 atau Mali-G52...",
        "gpu.checkBtn": "Cek",
        "gpu.howToCheck": "Cek nama dan seri GPU HP-mu menggunakan aplikasi DevCheck, AIDA64, CPU-Z, atau Debug Text di Minecraft versi Beta.",
        "gpu.tierInfo1": "Tier 1 dan Tier 2 tidak kompatibel, Tier 3 belum kompatibel untuk saat ini, Tier 4 sudah kompatibel, Tier 5 pasti kompatibel.",
        "gpu.tierInfo2": "Jika GPU Anda masuk di Tier 3 tapi Vibrant Visuals tidak dapat digunakan maka sebentar lagi akan kompatibel di update minecraft selanjutnya.",
        "gpu.tierInfo3": "Jika GPU Anda tidak terdaftar, maka kemungkinan besar tidak akan pernah kompatibel, solusi beli hp baru.",
        "gpu.tierInfo4": "Tier 5 Adalah spek GPU tertinggi, sedangkan Tier 1 adalah spek GPU terendah.",
        "gpu.tierInfo5": "Tier 1 Sama Tier 2 lebih kasihan sih. Akan sangat lama untuk dapat menggunakan Vibrant Visuals, mungkin tahun depan? Itupun dengan hasil visual dan performa yang lebih rendah.",
        "roadmap.title": "website masih dalam pengembangan terus pantau...",
        "roadmap.listTitle": "📝 To Do List",
        "roadmap.item1": "- Perbandingan Performa Vibrant Visuals Bawaan Vs Raiden Visuals",
        "roadmap.item2": "- Perbandingan Bayangan, Block Light, Refleksi, & Kabut volumetrik dari Vibrant Visuals bawaan vs Raiden Visuals",
        "roadmap.item3": "- Tutorial Pemasangan untuk Android pada masing-masing Launcher mengunakan Screenhots Step By Step",
        "roadmap.item4": "- Rekomendasi GPU untuk menggunakan Vibrant Visuals",
        "roadmap.item5": "- Rekomendasi setingan opsi grafis Vibrant Visuals untuk performa dan kualitas",
        "roadmap.item6": "- Rekomendasi Vibrant Visuals Pack Agar lebih indah dan Immersive",
        "roadmap.item7": "- Join DIscord Untuk Info Update Terbaru Dan Berkomunikasi Mengenai Vibrant Visuals",
        "roadmap.item8": "- Rayuan Donasi Melalui Trakteer.Id dan menunjukan kelebihannya untuk download Raiden Visuals langsung ke mediafire tanpa melewati banyak iklan",
        "roadmap.item9": "- Pertanyaan dan jawaban Q&A",
        "footer.desc": "Custom Deferred Configuration terbaik untuk mengoptimalkan performa Vibrant Visuals di Minecraft Bedrock.",
        "footer.cta": "GO TO DOWNLOADS",
        "modal.title": "Konfirmasi Unduhan",
        "modal.note": '*jika ingin melewati semua iklan, kamu bisa donasi Rp1000/bulan di <a href="https://trakteer.id/veda_raiden/reward/raiden-visuals-20-skip-ads-yKsXv" target="_blank" class="trakteer-link"><strong>trakteer.id</strong></a>.',
        "modal.cancel": "Batal",
        "modal.confirm": "Lanjutkan",
        "gpu.msgEmpty": 'Silakan ketik nama GPU nya dulu woilah!<br><img src="img/woylahcik.webp" class="result-sticker">',
        "gpu.msgTier1": '❌ Tidak Kompatibel! GPU mu terdeteksi di Tier 1. Sebaiknya ganti HP atau beli HP baru yang spek nya lebih bagus, GPU ini terlalu kuno buat sekarang.<br><img src="img/mkvvgaksupport.webp" class="result-sticker">',
        "gpu.msgTier2": '❌ Tidak Kompatibel! GPU mu terdeteksi di Tier 2. Yang sabar ya semoga bisa dibelikan HP baru Aamiin ^^.<br><img src="img/mkvvgaksupport.webp" class="result-sticker">',
        "gpu.msgTier3": '⚠️ Kemungkinan Kompatibel! GPU mu berada di Tier 3. Kalau masih tidak bisa pasti kedepannya bakal bisa karena GPU ini masih memiliki harapan, tetapi performa FPS bisa bervariasi tergantung kondisi perangkat.<br><img src="img/yondaktau.webp" class="result-sticker">',
        "gpu.msgTier4": '✅ SELAMAT! GPU Anda Sudah Kompatibel! GPU mu berada di Tier 4. Vibrant Visuals akan berjalan cukup lancar dan optimal di hpmu!<br><img src="img/cihuy.webp" class="result-sticker">',
        "gpu.msgTier5": '🌟😮✅ Njir HP Gaming Coeg, GPU mu berada di Tier 5. Vibrant Visuals sudah pasti akan berjalan dengan lancar dan optimal di hp gamingmu!<br><img src="img/cihuy.webp" class="result-sticker">',
        "gpu.msgNotFound": '😐 GPU apa ini woy? tolong ketikan nya diperhatikan yah. Pastikan penulisan nama tipe GPU nya sudah benar (Contoh: Adreno 610).<br><img src="img/woylahcik.webp" class="result-sticker">',
        "gpu.msgFetchError": 'Terjadi gangguan sistem saat membaca database.<br><img src="img/waduh.webp" class="result-sticker">',
        "modal.textTemplate": 'Kamu akan memasuki Link Vertise untuk mengunduh <strong>"{fileName}"</strong>. Harap berhati-hati dengan iklannya.',
        "pricing.title": "Dukung Raiden Visuals",
        "pricing.subtitle": "Raiden Visuals selalu gratis untuk semua orang. Kalau mau dapat bonus tambahan dan mempercepat pengembangan, kamu bisa jadi Supporter.",
        "pricing.standardTitle": "Standard",
        "pricing.standardPrice": "Gratis",
        "pricing.standardFeat1": "Raiden Visuals Standard (Stable Release)",
        "pricing.standardFeat2": "Update Berkala",
        "pricing.standardFeat3": "Dukungan Komunitas via Discord",
        "pricing.standardCta": "Download Gratis",
        "pricing.supporterBadge": "Paling Direkomendasikan",
        "pricing.supporterTitle": "Supporter",
        "pricing.supporterPrice": "Rp17.000",
        "pricing.supporterPeriod": "/ sekali beli",
        "pricing.supporterFeat1": "Raiden Visuals Standard (Stable + Fast Update)",
        "pricing.supporterFeat2": "Raiden Visuals VIP+ (Experimental)",
        "pricing.supporterFeat3": "Raiden Visuals Beta (Early Access)",
        "pricing.supporterFeat4": "Muka Admin (Bonus)",
        "pricing.supporterCta": "Jadi Supporter",
        "pricing.note": "*Pembayaran aman diproses melalui Trakteer.id, bukan syarat wajib untuk mengunduh Raiden Visuals.",
        "changelog.sectionTitle": "Changelog Terbaru",
        "changelog.sectionSubtitle": "Pantau terus pembaruan dan perbaikan terbaru dari Raiden Visuals.",
        "changelog.viewAll": "Lihat Semua Changelog",
        "changelog.readMore": "Baca Selengkapnya",
        "changelog.postedLabel": "Diposting:",
        "changelog.pageTitle": "Semua Changelog",
        "changelog.backHome": "← Kembali ke Beranda"
    },
    en: {
        "nav.home": "Home",
        "nav.download": "Download",
        "nav.guide": "Guide",
        "nav.gpu": "Check GPU",
        "nav.changelog": "Changelog",
        "nav.pricing": "Pricing",
        "nav.roadmap": "Roadmap",
        "nav.more": "More",
        "cta.download": "DOWNLOAD",
        "hero.title": "Raiden Visuals Free Download",
        "hero.subtitle": "Choose either the stable or beta version. Please make sure to read the installation guide.",
        "about.title": "What is Raiden Visuals?",
        "about.desc": "Raiden Visuals is a Custom Deferred Configuration that optimizes Vibrant Visuals performance on Minecraft Bedrock.",
        "features.title": "Features",
        "features.item1": "Optimizes shadows in Vibrant Visuals.",
        "features.item2": "Optimizes screen-space reflections in Vibrant Visuals.",
        "features.item3": "Optimizes point lights and their shadows in Vibrant Visuals.",
        "features.item4": "Optimizes volumetric fog in Vibrant Visuals.",
        "features.item5": "Expands render distance options (up to 1-50 chunks).",
        "guide.title": "Installation Guide",
        "guide.android": "ANDROID",
        "guide.androidIntro": "For Android, you need a third-party app such as MB Loader, Levi Launcher, Ambient For MCPE, or Flarial Client for Raiden Visuals to work.",
        "guide.mbloader": "For MB Loader, simply install the provided mcpack file, then launch it using the MBL2 or Fuse (Beta) shader loader.",
        "guide.levi": "For Levi Launcher, you need to install MaterialBinLoader 2 for Raiden Visuals to work.",
        "guide.ambient": "For Ambient For MCPE, you must enable the Shader Loader feature in the launcher settings for Raiden Visuals to work.",
        "guide.flarial": "For Flarial Client, you must enable the Shader Loader feature via the Flarial shortcut (the floating button with the Flarial logo). After enabling Shader Loader, you must restart Flarial Client for Raiden Visuals to work.",
        "guide.windows": "WINDOWS",
        "guide.windowsIntro": 'For Windows or Linux, simply move the "renderer" folder from the provided mcpack file and paste it into the location below.',
        "guide.stablePath": 'For the stable version of Minecraft Bedrock, open the "subpacks\\OfficialFix" folder, then move the "renderer" folder to <code class="copyable-path" onclick="copyPath(this)">C:\\XboxGames\\Minecraft for Windows\\Content\\data</code>',
        "guide.previewPath": 'For the preview version of Minecraft Bedrock, there\'s no need to go into the subpacks folder — move the "renderer" folder directly to <code class="copyable-path" onclick="copyPath(this)">C:\\XboxGames\\Minecraft Preview for Windows\\Content\\data</code>',
        "gpu.title": "GPU Check for Android",
        "gpu.boxTitle": "Check Your Phone's GPU Compatibility:",
        "gpu.placeholder": "Example: Adreno 610 or Mali-G52...",
        "gpu.checkBtn": "Check",
        "gpu.howToCheck": "Check your phone's GPU name and series using apps like DevCheck, AIDA64, CPU-Z, or the Debug Text feature in the Minecraft Beta version.",
        "gpu.tierInfo1": "Tier 1 and Tier 2 are not compatible, Tier 3 is not yet compatible, Tier 4 is compatible, and Tier 5 is definitely compatible.",
        "gpu.tierInfo2": "If your GPU falls under Tier 3 but Vibrant Visuals doesn't work yet, it will likely become compatible in a future Minecraft update.",
        "gpu.tierInfo3": "If your GPU isn't listed, it will most likely never be compatible — the solution is to get a new phone.",
        "gpu.tierInfo4": "Tier 5 is the highest GPU spec, while Tier 1 is the lowest.",
        "gpu.tierInfo5": "Tier 1 and Tier 2 are the unlucky ones. It'll be a long wait before Vibrant Visuals works for you — maybe next year? And even then, visuals and performance will be lower.",
        "roadmap.title": "the website is still in development, stay tuned...",
        "roadmap.listTitle": "📝 To Do List",
        "roadmap.item1": "- Performance comparison: default Vibrant Visuals vs Raiden Visuals",
        "roadmap.item2": "- Comparison of shadows, block light, reflections, & volumetric fog: default Vibrant Visuals vs Raiden Visuals",
        "roadmap.item3": "- Step-by-step installation tutorial for Android for each launcher, with screenshots",
        "roadmap.item4": "- GPU recommendations for using Vibrant Visuals",
        "roadmap.item5": "- Recommended Vibrant Visuals graphics settings for performance and quality",
        "roadmap.item6": "- Recommended Vibrant Visuals packs for a more beautiful, immersive look",
        "roadmap.item7": "- Join Discord for the latest update info and to chat about Vibrant Visuals",
        "roadmap.item8": "- A friendly nudge to donate via Trakteer.id, which lets you download Raiden Visuals straight from Mediafire without going through lots of ads",
        "roadmap.item9": "- Q&A",
        "footer.desc": "The best Custom Deferred Configuration for optimizing Vibrant Visuals performance in Minecraft Bedrock.",
        "footer.cta": "GO TO DOWNLOADS",
        "modal.title": "Download Confirmation",
        "modal.note": '*if you\'d like to skip all the ads, you can donate Rp1000/month at <a href="https://trakteer.id/veda_raiden/reward/raiden-visuals-20-skip-ads-yKsXv" target="_blank" class="trakteer-link"><strong>trakteer.id</strong></a>.',
        "modal.cancel": "Cancel",
        "modal.confirm": "Continue",
        "gpu.msgEmpty": 'Please type in your GPU name first!<br><img src="img/woylahcik.webp" class="result-sticker">',
        "gpu.msgTier1": '❌ Not Compatible! Your GPU is detected as Tier 1. You should consider getting a new phone with better specs — this GPU is too outdated for now.<br><img src="img/mkvvgaksupport.webp" class="result-sticker">',
        "gpu.msgTier2": '❌ Not Compatible! Your GPU is detected as Tier 2. Hang in there — hopefully you\'ll get a new phone soon ^^.<br><img src="img/mkvvgaksupport.webp" class="result-sticker">',
        "gpu.msgTier3": '⚠️ Possibly Compatible! Your GPU is Tier 3. If it doesn\'t work yet, it likely will in a future update since this GPU still has hope — but FPS performance may vary depending on your device.<br><img src="img/yondaktau.webp" class="result-sticker">',
        "gpu.msgTier4": '✅ CONGRATS! Your GPU is Compatible! Your GPU is Tier 4. Vibrant Visuals will run fairly smooth and optimized on your phone!<br><img src="img/cihuy.webp" class="result-sticker">',
        "gpu.msgTier5": '🌟😮✅ Whoa, a real gaming phone! Your GPU is Tier 5. Vibrant Visuals will definitely run smooth and optimized on your gaming phone!<br><img src="img/cihuy.webp" class="result-sticker">',
        "gpu.msgNotFound": "😐 What GPU is this? Please double-check your typing. Make sure the GPU name is spelled correctly (e.g., Adreno 610).<br><img src=\"img/woylahcik.webp\" class=\"result-sticker\">",
        "gpu.msgFetchError": 'A system error occurred while reading the database.<br><img src="img/waduh.webp" class="result-sticker">',
        "modal.textTemplate": 'You\'re about to go to a Vertise link to download <strong>"{fileName}"</strong>. Please be careful with the ads.',
        "pricing.title": "Support Raiden Visuals",
        "pricing.subtitle": "Raiden Visuals is always free for everyone. If you want extra bonuses and to help speed up development, you can become a Supporter.",
        "pricing.standardTitle": "Standard",
        "pricing.standardPrice": "Free",
        "pricing.standardFeat1": "Raiden Visuals Standard (Stable Release)",
        "pricing.standardFeat2": "Regular Updates",
        "pricing.standardFeat3": "Community Support via Discord",
        "pricing.standardCta": "Download Free",
        "pricing.supporterBadge": "Most Recommended",
        "pricing.supporterTitle": "Supporter",
        "pricing.supporterPrice": "Rp17,000",
        "pricing.supporterPeriod": "/ one-time",
        "pricing.supporterFeat1": "Raiden Visuals Standard (Stable + Fast Update)",
        "pricing.supporterFeat2": "Raiden Visuals VIP+ (Experimental)",
        "pricing.supporterFeat3": "Raiden Visuals Beta (Early Access)",
        "pricing.supporterFeat4": "Admin's Face (Bonus)",
        "pricing.supporterCta": "Become a Supporter",
        "pricing.note": "*Payment is securely processed via Trakteer.id — it is not required to download Raiden Visuals.",
        "changelog.sectionTitle": "Latest Changelog",
        "changelog.sectionSubtitle": "Keep track of the latest updates and fixes for Raiden Visuals.",
        "changelog.viewAll": "View All Changelogs",
        "changelog.readMore": "Read More",
        "changelog.postedLabel": "Posted:",
        "changelog.pageTitle": "All Changelogs",
        "changelog.backHome": "← Back to Home"
    }
};

let currentLang = localStorage.getItem('raidenLang') || 'id';

// Ambil teks terjemahan berdasarkan bahasa aktif (fallback ke bahasa Indonesia)
function t(key) {
    return (translations[currentLang] && translations[currentLang][key])
        || translations.id[key]
        || key;
}

// Terapkan bahasa ke seluruh elemen yang memiliki atribut data-i18n
function applyLanguage(lang) {
    currentLang = (lang === 'en') ? 'en' : 'id';
    localStorage.setItem('raidenLang', currentLang);
    document.documentElement.setAttribute('lang', currentLang === 'en' ? 'en' : 'id');

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
        el.textContent = t(el.getAttribute('data-i18n'));
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
        el.innerHTML = t(el.getAttribute('data-i18n-html'));
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
        el.setAttribute('placeholder', t(el.getAttribute('data-i18n-placeholder')));
    });

    const langToggleBtn = document.getElementById('langToggle');
    if (langToggleBtn) {
        const flagEl = document.getElementById('langSwitchFlag');
        const textEl = document.getElementById('langSwitchText');
        langToggleBtn.setAttribute('data-lang', currentLang);
        langToggleBtn.setAttribute('aria-checked', currentLang === 'en' ? 'true' : 'false');
        if (currentLang === 'en') {
            if (flagEl) flagEl.src = 'img/eng.webp';
            if (textEl) textEl.textContent = 'EN';
            langToggleBtn.setAttribute('title', 'Ganti ke Bahasa Indonesia');
        } else {
            if (flagEl) flagEl.src = 'img/ind.webp';
            if (textEl) textEl.textContent = 'ID';
            langToggleBtn.setAttribute('title', 'Switch to English');
        }
    }
}

document.addEventListener('DOMContentLoaded', function () {
    applyLanguage(currentLang);
    const langToggleBtn = document.getElementById('langToggle');
    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', function () {
            const soundClickEl = document.getElementById('soundClick');
            if (soundClickEl) {
                soundClickEl.currentTime = 0;
                soundClickEl.play().catch(() => {});
            }
            applyLanguage(currentLang === 'en' ? 'id' : 'en');
        });
    }
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

if (siteHeader && headerToggle && headerNav) {
    // Buka/tutup menu mobile saat tombol hamburger diklik
    headerToggle.addEventListener('click', function () {
        const sedangTerbuka = siteHeader.classList.toggle('nav-open');
        headerToggle.setAttribute('aria-expanded', sedangTerbuka ? 'true' : 'false');
        tutupHeaderMoreDropdown(); // Pastikan dropdown "MORE" ikut tertutup tiap kali menu mobile dibuka/tutup
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
// 2. FITUR OVERLAY KONFIRMASI SAAT KLIK DOWNLOAD (pengganti alert())
const downloadButtons = document.querySelectorAll('.download-btn');
const downloadOverlay = document.getElementById('downloadOverlay');
const downloadModalText = document.getElementById('downloadModalText');
const downloadModalConfirm = document.getElementById('downloadModalConfirm');
const downloadModalCancel = document.getElementById('downloadModalCancel');
const downloadModalClose = document.getElementById('downloadModalClose');

function bukaOverlayDownload(fileName, linkAsli) {
    downloadModalText.innerHTML = t('modal.textTemplate').replace('{fileName}', fileName);
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