## 📘 Bölüm: Crate'ler ve Harici Paketler  
### 🔹 Kategori: Crate Yayınlama  
#### ✅ Cevap 146: Crate yayınlama

Bir crate'i [crates.io](https://crates.io)'ya yayınlamak için şu adımları izleyin:

1. `Cargo.toml` dosyanızda `name`, `version`, `authors`, `description` ve `license` alanları olmalı.
2. Crate adınızın crates.io'da benzersiz olduğundan emin olun.
3. `cargo login` ile (crates.io'dan aldığınız API anahtarıyla) kimlik doğrulaması yapın.
4. `cargo publish` komutunu çalıştırarak crate'i yükleyin.

Güncelleme için, `Cargo.toml`'da sürümü artırıp tekrar `cargo publish` komutunu çalıştırın. Her sürüm benzersiz ve bir öncekinden büyük olmalıdır.
