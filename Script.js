  function kirimKeWhatsApp(event) {
    event.preventDefault(); // Mencegah halaman me-refresh otomatis

    // 1. GANTI DENGAN NOMOR WHATSAPP KAMU (Awali dengan 62, tanpa tanda + atau 0 di depan)
    const nomorAdmin = "6282214837804";

    // 2. Mengambil data guru, paket, dan harga dari tampilan modal
    const namaGuru = document.getElementById("modalTeacherName")?.innerText || "Guru Pilihan";
    const paketDipilih = document.querySelector('input[name="paket"]:checked')?.value || "Paket 4 Sesi";
    const totalHarga = document.getElementById("modalTotalPrice")?.innerText || "-";

    // 3. Mengambil data yang diketik orang tua di form
    const namaOrtu = document.getElementById("inputNamaOrtu")?.value.trim();
    const namaAnak = document.getElementById("inputNamaAnak")?.value.trim();
    const jadwal = document.getElementById("inputJadwal")?.value.trim();

    // Validasi agar kolom wajib tidak dikirim dalam keadaan kosong
    if (!namaOrtu || !namaAnak) {
      alert("Mohon isi Nama Orang Tua dan Nama/Kelas Anak terlebih dahulu.");
      return;
    }

    // 4. Menyusun format teks pesan WhatsApp otomatis
    const teksPesan = 
      `Halo Admin LesHub, saya ingin mendaftarkan les privat:\n\n` +
      `*Guru:* ${namaGuru}\n` +
      `*Paket:* ${paketDipilih}\n` +
      `*Total Biaya:* ${totalHarga}\n\n` +
      `*Data Pendaftar:*\n` +
      `• Nama Orang Tua: ${namaOrtu}\n` +
      `• Nama & Kelas Anak: ${namaAnak}\n` +
      `• Jadwal Diinginkan: ${jadwal || "Fleksibel"}\n\n` +
      `Mohon info ketersediaan jadwal dan instruksi pembayarannya. Terima kasih!`;

    // 5. Mengarahkan ke WhatsApp (encodeURIComponent menjaga simbol seperti '&' agar pesan tidak terpotong)
    const urlWhatsApp = `https://wa.me/${nomorAdmin}?text=${encodeURIComponent(teksPesan)}`;
    window.open(urlWhatsApp, "_blank");
  }
