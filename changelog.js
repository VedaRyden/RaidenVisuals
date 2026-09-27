// ===================== CHANGELOG (fetch + render) =====================
// File ini dipakai di 2 halaman:
// 1. index.html  -> menampilkan 1 card changelog terbaru (section "Changelog")
// 2. changelog.html -> menampilkan daftar lengkap semua changelog

(function () {
    let changelogData = [];

    // Ambil bahasa aktif dari script.js (variabel global `currentLang` & fungsi `t()`)
    function getLang() {
        return (typeof currentLang !== 'undefined') ? currentLang : 'id';
    }

    function translateStatic(key, fallback) {
        if (typeof t === 'function') {
            const hasil = t(key);
            return (hasil && hasil !== key) ? hasil : fallback;
        }
        return fallback;
    }

    // Ambil isi teks sesuai bahasa aktif dari field bilingual { id, en }.
    // Kalau field-nya masih teks polos (data lama), langsung dikembalikan apa adanya.
    function localize(field) {
        if (field && typeof field === 'object' && !Array.isArray(field)) {
            const lang = getLang();
            return field[lang] || field.id || field.en || '';
        }
        return field || '';
    }

    // Menghitung teks "X hari yang lalu" / "X days ago"
    function timeAgo(dateString) {
        const lang = getLang();
        const tanggalPost = new Date(dateString + 'T00:00:00');
        const sekarang = new Date();
        const hariIni = new Date(sekarang.getFullYear(), sekarang.getMonth(), sekarang.getDate());
        const diffMs = hariIni - new Date(tanggalPost.getFullYear(), tanggalPost.getMonth(), tanggalPost.getDate());
        const diffHari = Math.round(diffMs / (1000 * 60 * 60 * 24));

        if (diffHari <= 0) {
            return lang === 'en' ? 'Today' : 'Hari ini';
        }
        if (diffHari === 1) {
            return lang === 'en' ? 'Yesterday' : 'Kemarin';
        }
        return lang === 'en' ? (diffHari + ' days ago') : (diffHari + ' hari yang lalu');
    }

    // Format tanggal panjang untuk halaman detail, contoh: "27 September 2026"
    function formatTanggalPanjang(dateString) {
        const lang = getLang();
        const tgl = new Date(dateString + 'T00:00:00');
        const namaBulanId = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
        const namaBulanEn = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const bulan = lang === 'en' ? namaBulanEn[tgl.getMonth()] : namaBulanId[tgl.getMonth()];
        return tgl.getDate() + ' ' + bulan + ' ' + tgl.getFullYear();
    }

    function escapeHTML(str) {
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }

    // ---------- RENDER: Card ringkas di index.html ----------
    function renderCard() {
        const container = document.getElementById('changelogCardContainer');
        if (!container || changelogData.length === 0) return;

        const entry = changelogData[0]; // changelog paling baru (urutan pertama di JSON)
        const judul = localize(entry.title);
        const ringkasan = localize(entry.summary);
        const readMoreText = translateStatic('changelog.readMore', getLang() === 'en' ? 'Read More' : 'Baca Selengkapnya');

        container.innerHTML = `
            <a href="changelog.html#${entry.id}" class="changelog-card">
                <div class="changelog-card-thumb">
                    <img src="${entry.image}" alt="${escapeHTML(judul)}" loading="lazy">
                    <span class="changelog-card-version">v${entry.version}</span>
                </div>
                <div class="changelog-card-body">
                    <h3 class="changelog-card-title">${escapeHTML(judul)}</h3>
                    <p class="changelog-card-summary">${escapeHTML(ringkasan)}</p>
                    <div class="changelog-card-footer">
                        <span class="changelog-card-date">${timeAgo(entry.date)}</span>
                        <span class="changelog-card-readmore">${readMoreText} →</span>
                    </div>
                </div>
            </a>
        `;
    }

    // ---------- RENDER: Halaman detail penuh di changelog.html ----------
    function renderDetailPage() {
        const container = document.getElementById('changelogFullList');
        if (!container || changelogData.length === 0) return;

        const postedLabel = translateStatic('changelog.postedLabel', getLang() === 'en' ? 'Posted:' : 'Diposting:');

        container.innerHTML = changelogData.map(function (entry) {
            const judul = localize(entry.title);
            const peringatan = localize(entry.warning);

            const sectionsHTML = entry.sections.map(function (section) {
                const judulSeksi = localize(section.heading);
                const itemsHTML = section.items.map(function (item) {
                    return '<li>' + escapeHTML(localize(item)) + '</li>';
                }).join('');
                return `
                    <div class="changelog-section">
                        <h3 class="changelog-section-heading">${escapeHTML(judulSeksi)}</h3>
                        <ul class="changelog-list">${itemsHTML}</ul>
                    </div>
                `;
            }).join('');

            const warningHTML = peringatan ? `
                <div class="changelog-warning-box">
                    <span class="changelog-warning-icon">⚠</span>
                    <span>${escapeHTML(peringatan)}</span>
                </div>
            ` : '';

            return `
                <article class="changelog-post" id="${entry.id}">
                    <div class="changelog-post-thumb">
                        <img src="${entry.image}" alt="${escapeHTML(judul)}" loading="lazy">
                    </div>
                    <div class="changelog-post-meta">
                        <span class="changelog-post-version">v${entry.version}</span>
                        <span class="changelog-post-date">${postedLabel} ${formatTanggalPanjang(entry.date)}</span>
                    </div>
                    <h2 class="changelog-post-title">${escapeHTML(judul)}</h2>
                    ${warningHTML}
                    ${sectionsHTML}
                </article>
            `;
        }).join('<div class="os-guide-block"></div>');
    }

    function renderAll() {
        renderCard();
        renderDetailPage();
    }

    function muatChangelog() {
        fetch('changelog.json')
            .then(function (res) {
                if (!res.ok) throw new Error('Gagal memuat changelog.json');
                return res.json();
            })
            .then(function (data) {
                changelogData = (data && Array.isArray(data.changelogs)) ? data.changelogs : [];
                renderAll();
            })
            .catch(function (err) {
                console.error('Changelog error:', err);
                const cardContainer = document.getElementById('changelogCardContainer');
                if (cardContainer) cardContainer.innerHTML = '';
                const listContainer = document.getElementById('changelogFullList');
                if (listContainer) listContainer.innerHTML = '';
            });
    }

    document.addEventListener('DOMContentLoaded', function () {
        muatChangelog();

        // Render ulang teks tanggal & tombol saat bahasa di-toggle
        const langToggleBtn = document.getElementById('langToggle');
        if (langToggleBtn) {
            langToggleBtn.addEventListener('click', function () {
                setTimeout(renderAll, 0);
            });
        }
    });
})();