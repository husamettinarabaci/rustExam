## 📘 Bölüm: Gömülü Sistemlerde İleri Konular
### 🔹 Kategori: Gerçek Zamanlı İşletim Sistemleri (RTOS)
#### ✅ Cevap 769: Gömülü hata ayıklama teknikleri

Gömülü sistemlerde hata ayıklama için seri port üzerinden çıktı, LED ile durum gösterimi ve donanım debugger'ları kullanılır.

Rust ile hata ayıklama örneği:
```rust
// Seri port ile çıktı
writeln!(serial, "Değer: {}", value).ok();
// LED yakma
led.set_high().ok();
```
Ayrıca `gdb`, `probe-rs`, `defmt` gibi araçlar kullanılır. Hata ayıklama sırasında kodun zamanlamasını ve yan etkilerini göz önünde bulundurmak gerekir.
