## 📘 Bölüm: İleri Makro Tasarımı  
### 🔹 Kategori: Prosedürel Makrolar  
#### ✅ Cevap 820: Makro crate'lerini paketleme ve yayımlama

Bir prosedürel makro crate'i paketlemek ve yayımlamak için:

- `cargo new my_macro --lib` ile yeni bir kütüphane oluşturun.
- `Cargo.toml` dosyasında `[lib] proc-macro = true` satırını ekleyin.
- Gerekli bağımlılıkları (`syn`, `quote`, `proc-macro2`) ekleyin.
- Makronuzu yazın ve test edin.
- `cargo package` ile paketi kontrol edin.
- `cargo publish` ile crates.io'ya yükleyin.
- Yayımlama öncesi: README, lisans, dokümantasyon ve örneklerin eksiksiz olduğundan emin olun.
