## 📘 Bölüm: Eklenti Mimarileri  
### 🔹 Kategori: Dinamik Yükleme ve Eklenti Sistemleri  
#### ✅ Cevap 1253: Eklenti bağımlılıklarını ve sürümlerini yönetme

Rust eklenti sistemlerinde bağımlılık yönetimi için eklentiler ve ana uygulama ortak bir arayüz crate'i kullanabilir. Sürüm uyumluluğu için eklenti ve ana uygulama arasında sürüm kontrolü yapılabilir. Sürüm uyuşmazlıklarını önlemek için eklenti arayüzünde açık sürüm numarası ve semver kullanılabilir.

Örnek arayüz:
```rust
pub trait Plugin {
    fn version(&self) -> &'static str;
}
```

Ana uygulama eklenti yüklerken sürüm kontrolü yapabilir:
```rust
if plugin.version() != APP_SUPPORTED_VERSION {
    panic!("Plugin version mismatch");
}
```

Ayrıca, Cargo.toml'da ortak bağımlılıkların sürümleri sabitlenebilir. Böylece eklenti ve ana uygulama aynı sürümde arayüz kullanır.
