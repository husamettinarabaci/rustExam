## 📘 Bölüm: Full-Stack Rust Entegrasyonu  
### 🔹 Kategori: Katmanlar arası yapılandırma yönetimi  
#### ✅ Cevap 695: Katmanlar arası yapılandırma yönetimi

Full-stack Rust projelerinde, `config` crate'i veya ortam değişkenleri ile yapılandırma yönetilebilir. Ortak yapılandırma, paylaşılan bir crate'te tutulabilir.

Örnek:
```rust
// shared/src/lib.rs
pub struct AppConfig {
    pub api_url: String,
}
```
Backend ve frontend bu yapıyı kullanarak tutarlı yapılandırma sağlar. `dotenv` veya `config` gibi araçlar ortam bazlı ayarları yönetir.
