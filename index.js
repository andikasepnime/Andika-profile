<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>M Andika | Universitas Politeknik jati luhur</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
</head>
<body>
    <div class="profile-container">
        <header class="header">
            <a href="#" aria-label="Kembali" class="back-button"><i class="fas fa-arrow-left"></i></a>
            <span class="username-header">M Andika Rustiwa</span>
            <a href="#" aria-label="Menu" class="menu-button"><i class="fas fa-ellipsis-v"></i></a>
        </header>

        <section class="profile-info">
            <div class="profile-header">
                <img src="assets/cover-image.jpg" alt="Cover Profile" class="cover-image">
                <div class="profile-picture-container">
                    <img src="assets/profile-picture.jpg" alt="Foto Profil m andika rustiwa" class="profile-picture">
                </div>
            </div>
            
            <div class="profile-details">
                <div class="username-section">
                    <h1 class="username">m andika rustiwa</h1>
                    <i class="fas fa-check-circle verified-badge" aria-label="Akun Terverifikasi"></i>
                </div>
                
                <div class="stats" role="list">
                    <div role="listitem">
                        <span class="number">10</span>
                        <span class="label">postingan</span>
                    </div>
                    <div role="listitem">
                        <span class="number">983rb</span>
                        <span class="label">pengikut</span>
                    </div>
                    <div role="listitem">
                        <span class="number">10</span>
                        <span class="label">teman</span>
                    </div>
                </div>

                <p class="description">Perusahaan Teknologi Informasi</p>
                <a href="https://playlistku.vercel.app" target="_blank" class="link">playlistku.vercel.app</a>
                <p class="followed-by">Diikuti oleh Prabowo Subianto</p>

                <div class="actions">
                    <button class="btn primary">Mengikuti</button>
                    <button class="btn secondary">Kirim Pesan</button>
                    <button class="btn icon-btn" aria-label="Toko"><i class="fas fa-shopping-bag"></i></button>
                </div>
            </div>
        </section>

        <section class="categories">
            <div class="category-item" role="button" tabindex="0" aria-label="Kategori Coding">
                <div class="icon-circle"><i class="fas fa-code"></i></div>
                <span>Coding</span>
            </div>
            <div class="category-item" role="button" tabindex="0" aria-label="Kategori Film">
                <div class="icon-circle"><i class="fas fa-film"></i></div>
                <span>Film</span>
            </div>
            <div class="category-item" onclick="showMusicList()" role="button" tabindex="0" aria-label="Pilih Musik">
                <div class="icon-circle"><i class="fas fa-music"></i></div>
                <span>Music</span>
            </div>
            <div class="category-item" role="button" tabindex="0" aria-label="Kategori Games">
                <div class="icon-circle"><i class="fas fa-gamepad"></i></div>
                <span>Games</span>
            </div>
        </section>

        <nav class="tabs-nav" role="tablist">
            <button class="tab-link" role="tab" aria-controls="content-notes" data-tab="notes">Catatan</button>
            <button class="tab-link active" role="tab" aria-controls="content-album" data-tab="album">MyAlbum</button>
            <button class="tab-link" role="tab" aria-controls="content-shop" data-tab="shop">Shop</button>
        </nav>

        <section id="content-album" class="tab-content active" role="tabpanel">
            <div class="image-grid">
                <img src="assets/img-album-1.jpg" alt="Galeri 1: Gradien Warna" loading="lazy">
                <img src="assets/img-album-2.jpg" alt="Galeri 2: Bukit Hijau" loading="lazy">
                <img src="assets/img-album-3.jpg" alt="Galeri 3: Pegunungan" loading="lazy">
                <img src="assets/img-album-4.jpg" alt="Galeri 4: Dermaga" loading="lazy">
                <img src="assets/img-album-5.jpg" alt="Galeri 5: Pantai" loading="lazy">
                <img src="assets/img-album-6.jpg" alt="Galeri 6: Hutan" loading="lazy">
                <img src="assets/img-album-7.jpg" alt="Galeri 7: Jembatan Kayu" loading="lazy">
                <img src="assets/img-album-8.jpg" alt="Galeri 8: Yosemite" loading="lazy">
                <img src="assets/img-album-9.jpg" alt="Galeri 9: Puncak Gunung" loading="lazy">
            </div>
        </section>

        <section id="content-shop" class="tab-content hidden" role="tabpanel">
            <div class="shop-banner">
                Belanja produk eksklusif M Andika Rustiwa segera hadir <span class="premium">💎</span>
            </div>
        </section>
        
        <section id="content-notes" class="tab-content hidden" role="tabpanel">
            <div class="notes-feed">
                <article class="note-item">
                    <div class="note-header">
                        <img src="assets/profile-picture.jpg" alt="Profile xwbbygood" class="note-profile-pic">
                        <div class="note-meta">
                            <div class="note-user">m andika rustiwa<i class="fas fa-check-circle verified-badge"></i></div>
                            <div class="note-date">@xwbbygood · 27 Okt 2025</div>
                        </div>
                    </div>
                    <p class="note-text">
                        Hari ini aku cukup bahagia, tapi hari ini juga aku ngerasa sedih. Untuk kesekian kalinya aku dipaksakan untuk bersabar kembali. Dan berita baiknya aku bahagia, karena kesabaranku kemarin berbuah manis, ada banyak pelajaran yang aku dapat dari kisah kita ini, meskipun singkat tapi berarti.
                        <br><br>
                        Hatinya masih utuh milikku, namun raga nya masih sulit untuk aku milikki sepenuhnya. Namun kami tahu, meskipun ini sulit selalu ada gambaran kedepan nya, dan aku berharap semuanya akan baik baik saja bersama dia.
                        <br><br>
                        Kita masih sama sama berjuang, semua masih kita usahakan, dan hanya tuhan, doa dan waktu yang menentukan.
                    </p>
                </article>

                <article class="note-item">
                    <div class="note-header">
                        <img src="assets/profile-picture.jpg" alt="Profile xwbbygood" class="note-profile-pic">
                        <div class="note-meta">
                            <div class="note-user">m andika rustiwa <i class="fas fa-check-circle verified-badge"></i></div>
                            <div class="note-date">@xwbbygood · 26 Okt 2025</div>
                        </div>
                    </div>
                    <p class="note-text">
                        Aku menyayanginya bahkan lebih dari yang dia tau, Aku menemukan rasa tenang disaat aku kacau, Aku menemukan rasa bahagia Aku menemukan senyuman yang sempat hilang. Aku tidak ingin kehilangan nya lagi Tapi kenapa takdir tidak berpihak
                    </p>
                </article>
                
                <article class="note-item">
                    <div class="note-header">
                        <img src="assets/profile-picture.jpg" alt="Profile xwbbygood" class="note-profile-pic">
                        <div class="note-meta">
                            <div class="note-user">m andika rustiwa<i class="fas fa-check-circle verified-badge"></i></div>
                            <div class="note-date">@xwbbygood · 25 Okt 2025</div>
                        </div>
                    </div>
                    <p class="note-text">
                        Kalo memang ini egoku, tapi kenapa begitu sulit untuk melepaskan nya. Bahkan ini terlalu sulit. Aku berusaha untuk tidak menghubungi nya lagi, tpi rasa untuk mencari nya semakin menggebbu. Kalo memang tidak ditakdirkan, mengapa selalu ada celah untuk bertemu dan bersama.
                    </p>
                </article>
            </div>
        </section>

    </div>

    <div id="music-overlay" class="music-overlay hidden" aria-modal="true" role="dialog">
        <div class="music-list-modal">
            <span class="close-btn" onclick="hideMusicList()" aria-label="Tutup">&times;</span>
            <h3>Pilih Musik</h3>
            <ul role="list">
                <li role="listitem"><a href="#" onclick="playMusic('Sisa Rasa - Mahalini', this)">🎵 Sisa Rasa - Mahalini</a></li>
                <li role="listitem"><a href="#" onclick="playMusic('Monolog - Pamungkas', this)">🎧 Monolog - Pamungkas</a></li>
                <li role="listitem"><a href="#" onclick="playMusic('Peri Cintaku - Marcell', this)">🎶 Peri Cintaku - Marcell</a></li>
                <li role="listitem"><a href="#" onclick="playMusic('Bertahan Terluka - Fabio Asher', this)">🎤 Bertahan Terluka - Fabio Asher</a></li>
                <li role="listitem"><a href="#" onclick="playMusic('Melukis Senja - Budi Doremi', this)">🎸 Melukis Senja - Budi Doremi</a></li>
            </ul>
        </div>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const tabs = document.querySelectorAll('.tabs-nav .tab-link');
            const contents = document.querySelectorAll('.tab-content');

            // Fungsi untuk Mengganti Tab
            tabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    const targetTab = tab.getAttribute('data-tab');

                    // Hapus kelas 'active' dari semua tab dan konten
                    tabs.forEach(t => t.classList.remove('active'));
                    contents.forEach(c => c.classList.add('hidden'));

                    // Tambahkan kelas 'active' ke tab yang diklik
                    tab.classList.add('active');

                    // Tampilkan konten yang sesuai
                    document.getElementById('content-' + targetTab).classList.remove('hidden');
                });
            });
        });

        // Fungsi untuk Musik Overlay
        function showMusicList() {
            document.getElementById('music-overlay').classList.remove('hidden');
        }

        function hideMusicList() {
            document.getElementById('music-overlay').classList.add('hidden');
        }

        function playMusic(songTitle, element) {
            // Hilangkan highlight dari lagu yang sedang diputar sebelumnya
            document.querySelectorAll('.music-list-modal a').forEach(link => {
                link.classList.remove('now-playing');
            });

            // Tambahkan highlight ke lagu yang baru diklik
            element.classList.add('now-playing');
            
            // Logika simulasi pemutaran musik (Ganti dengan integrasi audio sebenarnya jika diperlukan)
            console.log('Memutar: ' + songTitle);
            alert('Lagu Terpilih: ' + songTitle + '\n(Ini adalah simulasi, tidak ada audio yang diputar)');

            // Tutup overlay
            hideMusicList();
        }