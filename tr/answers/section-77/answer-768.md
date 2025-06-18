## 📘 Bölüm: Gömülü Sistemlerde İleri Konular
### 🔹 Kategori: Gerçek Zamanlı İşletim Sistemleri (RTOS)
#### ✅ Cevap 768: Donanım zamanlayıcıları ve watchdog kullanımı

Donanım zamanlayıcıları, belirli aralıklarla kesme üretir ve zaman tabanlı işlemler için kullanılır. Watchdog ise sistemin kilitlenmesini önlemek için periyodik olarak sıfırlanması gereken bir güvenlik mekanizmasıdır.

Rust ile zamanlayıcı/Watchdog başlatma örneği (psödokod):
```rust
let timer = hal::Timer::new(...);
timer.start(1_000); // 1 ms
let mut watchdog = hal::Watchdog::new(...);
watchdog.feed(); // Periyodik olarak çağrılır
```
Bu yapılar, sistemin güvenli ve kararlı çalışmasını sağlar. Watchdog, sistem yanıt vermezse otomatik reset atar.
