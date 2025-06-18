## 📘 Bölüm: Derleme Zamanı Performans Optimizasyonu
### 🔹 Kategori: Derleme Süresi ve Darboğazlar
#### ✅ Cevap 1428: Yavaş derlemeleri ve darboğazları teşhis etme

Yavaş derlemelerin başlıca nedenleri: büyük bağımlılıklar, karmaşık makrolar, çok sayıda generic ve büyük crate'lerdir. `cargo build -Z timings` ve `cargo tree` ile darboğazlar tespit edilebilir. Gereksiz bağımlılıkları kaldırmak ve kodu sadeleştirmek derleme süresini iyileştirir.

```bash
cargo +nightly build -Z timings
```

Bu araçlar, hangi adımın yavaş olduğunu gösterir.
