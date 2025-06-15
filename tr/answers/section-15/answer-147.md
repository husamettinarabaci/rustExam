## 📘 Bölüm: Crate'ler ve Harici Paketler  
### 🔹 Kategori: Cargo.toml'da Sürümleme  
#### ✅ Cevap 147: Cargo.toml'da sürümleme

Rust'ta crate'inizin sürümünü `Cargo.toml` dosyasındaki `version` alanı ile belirlersiniz:

```toml
[package]
name = "benim_crate'im"
version = "1.2.3"
```

Rust, [semantik sürümleme](https://semver.org/lang/tr/) kullanır:
- **MAJOR**: Geriye dönük uyumsuz değişiklikler
- **MINOR**: Geriye dönük uyumlu yeni özellikler
- **PATCH**: Geriye dönük uyumlu hata düzeltmeleri

Sürümü güncelleyip yayınladığınızda, crates.io yeni sürümün bir öncekinden büyük olmasını ister. Bu, kullanıcıların ve araçların uyumluluğu ve güncellemeleri yönetmesini kolaylaştırır.
