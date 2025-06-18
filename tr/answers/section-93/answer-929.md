## 📘 Bölüm: Gömülü İşletim Sistemi ve RTOS Geliştirme
### 🔹 Kategori: Gömülü OS Çekirdeğini Hata Ayıklama
#### ✅ Cevap 929: Gömülü OS çekirdeğini hata ayıklama

Gömülü OS çekirdeğini hata ayıklamak için semihosting, RTT (Real-Time Transfer), seri çıktı ve donanım debugger'ları (örn. JTAG, SWD) gibi teknikler kullanılır. Rust'ta `probe-rs` ve `defmt` gibi araçlar verimli loglama ve hata ayıklama sağlar. Örneğin, `defmt::info!()` ile gerçek zamanlı log alınabilir. Donanım debugger'ları, breakpoint ve bellek incelemesiyle çekirdek geliştirmede kritik rol oynar.
