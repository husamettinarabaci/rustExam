## 📘 Bölüm: Workspace ve Paket Organizasyonu
### 🔹 Kategori: Workspace üyelerinde sürümleme ve yayımlama
#### ✅ Cevap 470: Workspace üyelerinde sürümleme ve yayımlama

Workspace içindeki bir crate'in sürümünü güncellemek için ilgili crate'in `Cargo.toml` dosyasında `version` alanını değiştirin. Yayımlamak için:

1. `cargo login` ile crates.io'ya giriş yapın.
2. `cargo publish -p crate_adi` komutunu kullanın.

Sürüm yönetiminde semantik versiyonlamaya dikkat edilmeli ve bağımlılıklar güncel olmalıdır.
