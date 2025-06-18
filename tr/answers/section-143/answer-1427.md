## 📘 Bölüm: Derleme Zamanı Performans Optimizasyonu
### 🔹 Kategori: Hızlı Yineleme ve cargo check
#### ✅ Cevap 1427: Hızlı yineleme için `cargo check` kullanımı

`cargo check`, kodun sadece tip kontrolünü yapar ve binary üretmez. Bu nedenle tam derlemeye göre çok daha hızlıdır. Geliştirme sırasında sık sık `cargo check` kullanmak, hızlı geri bildirim sağlar.

```bash
cargo check
```

Hataları hızlıca görmek ve geliştirme döngüsünü hızlandırmak için idealdir.
