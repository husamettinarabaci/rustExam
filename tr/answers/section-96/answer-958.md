## 📘 Bölüm: İleri Test ve Biçimsel Doğrulama  
### 🔹 Kategori: Test kalitesini değerlendirmek için mutasyon testi  
#### ✅ Cevap 958: Test kalitesini değerlendirmek için mutasyon testi

Mutasyon testi, kodda kasıtlı hatalar (mutasyonlar) yaparak testlerin bu hataları yakalayıp yakalamadığını ölçer. Rust'ta "mutagen" gibi araçlar kullanılabilir.

```bash
# Mutagen ile mutasyon testi başlatmak için
cargo install mutagen
cargo mutagen test
```
Testler mutasyonları yakalayamazsa, test kalitesinin artırılması gerekir.
