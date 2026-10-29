// ===================== CHANGELOG (fetch + render) =====================
// File ini dipakai di 2 halaman:
// 1. index.html  -> menampilkan 1 card changelog terbaru (section "Changelog")
// 2. changelog.html -> menampilkan daftar lengkap semua changelog

(function () {
    let changelogData = [];
    let scrollToEntryOnNextRender = true;
    const editions = [
        { type: 'vip-plus', key: 'changelog.vipHeading', fallback: 'Raiden Visuals VIP+' },
        { type: 'standard', key: 'changelog.standardHeading', fallback: 'Raiden Visuals Standard' }
    ];

    // Ambil bahasa aktif dari script.js (variabel global `currentLang` & fungsi `t()`)
    function getLang() {
        return window.currentLang || 'id';
    }

    function translateStatic(key, fallback) {
        if (typeof window.t === 'function') {
            const hasil = window.t(key);
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

    function getSelectedEdition() {
        const requested = new URLSearchParams(window.location.search).get('edition');
        if (editions.some(function (edition) { return edition.type === requested; })) return requested;

        const entryId = decodeURIComponent(window.location.hash.slice(1));
        const linkedEntry = changelogData.find(function (entry) { return entry.id === entryId; });
        return linkedEntry ? linkedEntry.product : '';
    }

    function renderEditionPicker() {
        const picker = document.getElementById('changelogEditionPicker');
        if (!picker) return;

        picker.innerHTML = editions.map(function (edition) {
            const entries = changelogData
                .filter(function (entry) { return entry.product === edition.type; })
                .sort(function (a, b) { return new Date(b.date) - new Date(a.date); });
            if (!entries.length) return '';

            const latest = entries[0];
            const title = localize(latest.title);
            const summary = localize(latest.summary);
            const countLabel = translateStatic('changelog.updateCount', '{count} updates')
                .replace('{count}', String(entries.length));
            const latestLabel = translateStatic('changelog.latestUpdate', 'Latest update');
            const viewLabel = translateStatic('changelog.viewUpdates', 'View Updates');

            return `
                <a class="changelog-edition-card" href="changelog.html?edition=${edition.type}">
                    <div class="changelog-edition-card-thumb">
                        <img src="${escapeHTML(String(latest.image))}" alt="${escapeHTML(title)}" loading="lazy">
                        <span class="changelog-edition-card-version">v${escapeHTML(String(latest.version))}</span>
                    </div>
                    <div class="changelog-edition-card-body">
                        <div class="changelog-edition-card-meta">
                            <span>${escapeHTML(countLabel)}</span>
                            <span>${escapeHTML(latestLabel)} · ${timeAgo(latest.date)}</span>
                        </div>
                        <h2>${escapeHTML(translateStatic(edition.key, edition.fallback))}</h2>
                        <p class="changelog-edition-card-latest">${escapeHTML(title)}</p>
                        ${summary ? `<p class="changelog-edition-card-summary">${escapeHTML(summary)}</p>` : ''}
                        <span class="changelog-edition-card-link">${escapeHTML(viewLabel)} <span aria-hidden="true">→</span></span>
                    </div>
                </a>
            `;
        }).join('');
    }

    // ---------- RENDER: Changelog dipisah berdasarkan edisi ----------
    function renderCard() {
        const container = document.getElementById('changelogCardContainer');
        if (!container || changelogData.length === 0) return;

        const readMoreText = translateStatic('changelog.readMore', getLang() === 'en' ? 'Read More' : 'Baca Selengkapnya');
        container.innerHTML = editions.map(function (group) {
            const entries = changelogData.filter(function (entry) { return entry.product === group.type; });
            if (!entries.length) return '';
            const cards = entries.slice(0, 2).map(function (entry) {
                const judul = localize(entry.title);
                const ringkasan = localize(entry.summary);
                return `
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
            }).join('');
            return `
                <section class="changelog-edition-group">
                    <h3 class="changelog-edition-heading">${escapeHTML(translateStatic(group.key, group.fallback))}</h3>
                    <div class="changelog-edition-cards">${cards}</div>
                </section>
            `;
        }).join('');
    }
    // ---------- RENDER: Halaman detail penuh di changelog.html ----------
    function renderDetailPage() {
        const container = document.getElementById('changelogFullList');
        const picker = document.getElementById('changelogEditionPicker');
        const pickerIntro = document.getElementById('changelogPickerIntro');
        const backLink = document.getElementById('changelogBackEditions');
        if (!container || changelogData.length === 0) return;

        const postedLabel = translateStatic('changelog.postedLabel', getLang() === 'en' ? 'Posted:' : 'Diposting:');
        const selectedEdition = getSelectedEdition();
        const selectedEntryId = decodeURIComponent(window.location.hash.slice(1));

        if (!selectedEdition) {
            if (picker) picker.hidden = false;
            if (pickerIntro) pickerIntro.hidden = false;
            if (backLink) backLink.hidden = true;
            container.hidden = true;
            container.innerHTML = '';
            renderEditionPicker();
            scrollToEntryOnNextRender = false;
            return;
        }

        if (picker) picker.hidden = true;
        if (pickerIntro) pickerIntro.hidden = true;
        if (backLink) backLink.hidden = false;
        container.hidden = false;

        container.innerHTML = editions.filter(function (group) {
            return group.type === selectedEdition;
        }).map(function (group) {
            const entries = changelogData.filter(function (entry) { return entry.product === group.type; });
            if (!entries.length) return '';
            const posts = entries.map(function (entry) {
                const judul = localize(entry.title);
                const ringkasan = localize(entry.summary);
                const peringatan = localize(entry.warning);
                const sectionsHTML = (entry.sections || []).map(function (section) {
                    const judulSeksi = localize(section.heading);
                    const itemsHTML = (section.items || []).map(function (item) {
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
                        <header class="changelog-post-header">
                            <h2 class="changelog-post-title">${escapeHTML(judul)}</h2>
                            <div class="changelog-post-meta">
                                <span class="changelog-post-edition">${escapeHTML(translateStatic(group.key, group.fallback))}</span>
                                <span class="changelog-post-version">v${escapeHTML(String(entry.version))}</span>
                                <time class="changelog-post-date" datetime="${escapeHTML(String(entry.date))}">${postedLabel} ${formatTanggalPanjang(entry.date)}</time>
                            </div>
                        </header>
                        <div class="changelog-post-thumb"><img src="${escapeHTML(String(entry.image))}" alt="${escapeHTML(judul)}" loading="lazy"></div>
                        ${ringkasan ? `<p class="changelog-post-summary">${escapeHTML(ringkasan)}</p>` : ''}
                        ${warningHTML}
                        ${sectionsHTML}
                    </article>
                `;
            }).join('<div class="os-guide-block"></div>');
            return `
                <section class="changelog-edition-group changelog-edition-detail">
                    <h2 class="changelog-edition-heading">${escapeHTML(translateStatic(group.key, group.fallback))}</h2>
                    ${posts}
                </section>
            `;
        }).join('');

        if (selectedEntryId && scrollToEntryOnNextRender) {
            requestAnimationFrame(function () {
                const entry = document.getElementById(selectedEntryId);
                if (entry) entry.scrollIntoView();
            });
        }
        scrollToEntryOnNextRender = false;
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

        document.addEventListener('languageChanged', renderAll);
        window.addEventListener('hashchange', renderAll);
    });
})();
