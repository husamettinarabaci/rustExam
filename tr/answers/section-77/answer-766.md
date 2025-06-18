## 📘 Bölüm: Gömülü Sistemlerde İleri Konular
### 🔹 Kategori: Gerçek Zamanlı İşletim Sistemleri (RTOS)
#### ✅ Cevap 766: Güvenli önyükleme ve firmware doğrulama

Güvenli önyükleme, sistemin yalnızca doğrulanmış ve güvenilir firmware ile başlatılmasını sağlar. Bu, yetkisiz veya zararlı kodun çalışmasını engeller.

Rust ile firmware doğrulama için genellikle:
- Firmware dosyasının hash'i veya dijital imzası kontrol edilir.
- Kriptografik algoritmalar (örn. SHA-256, ECDSA) kullanılır.

Örnek (psödokod):
```rust
let firmware_hash = calculate_hash(firmware);
if firmware_hash == expected_hash {
    // Güvenli, başlat
} else {
    // Reddet
}
```
Bu yöntemler, gömülü sistemlerde güvenliğin temelini oluşturur.
