## 📘 Bölüm: Profil ve Performans Ayarı  
### 🔹 Kategori: Binary Boyutunu Azaltma  
#### ✅ Cevap 974: LTO ve binary küçültme ile boyut azaltma

LTO (Link Time Optimization), derleme sırasında kodun daha fazla optimize edilmesini sağlar ve binary boyutunu küçültebilir. Ayrıca `strip` komutu ile sembol tablosu kaldırılarak ek bir küçültme sağlanır.

```toml
# Cargo.toml'da
[profile.release]
lto = true
```

Terminalde:
```
cargo build --release
ls -lh target/release/<program_adı>
strip target/release/<program_adı>
ls -lh target/release/<program_adı>
```
İlk ve son dosya boyutlarını karşılaştırarak küçülmeyi gözlemleyebilirsiniz.
