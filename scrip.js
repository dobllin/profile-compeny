// Tambahkan event listener ke semua link dengan class 'link'
document.querySelectorAll('.link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Cegah link langsung berpindah halaman
        
        // Dapatkan URL tujuan dari atribut href
        const targetUrl = this.getAttribute('href');
        
        // Tambahkan class 'fade-out' untuk memulai animasi keluar
        document.querySelector('.page').classList.add('fade-out');

        // Tunggu sampai animasi selesai (setelah 500ms)
        setTimeout(function() {
            // Pindah ke halaman baru
            window.location.href = targetUrl;
        }, 500); // Sesuaikan dengan durasi CSS transition (0.5s = 500ms)
    });
});
