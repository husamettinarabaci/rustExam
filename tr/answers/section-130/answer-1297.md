## 📘 Bölüm: Mikroservisler ve Servis Mesh'leri  
### 🔹 Kategori: Konfigürasyon Yönetimi ve `config` Crate'i  
#### ✅ Cevap 1297: `config` crate ile konfigürasyon yönetimi

`config` crate'i, Rust uygulamalarında farklı ortamlar için JSON, YAML veya TOML dosyalarını ve ortam değişkenlerini birleştirerek esnek konfigürasyon sağlar. Konfigürasyonlar, uygulama başlatılırken yüklenir ve tip güvenli olarak kullanılır. Güvenli konfigürasyon, hassas bilgilerin korunması ve hatasız çalışma için kritiktir.

```rust
use config::Config;
let settings = Config::builder()
    .add_source(config::File::with_name("Settings"))
    .add_source(config::Environment::default())
    .build()?;
```
