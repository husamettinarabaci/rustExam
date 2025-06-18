## 📘 Bölüm: Sistem Güvenliği ve Sertleştirme
### 🔹 Kategori: Rust Kodunda Güvenlik Açıklarını Denetleme
#### ✅ Cevap 917: Rust kodunda güvenlik açıklarını denetleme

Rust kodunda denetim, unsafe kod, bağımlılık açıkları ve mantık hatalarını kontrol etmeyi içerir. `cargo audit` ile bağımlılıklardaki güvenlik açıklarını, `clippy` ile kod kalitesini denetleyebilirsiniz. Manuel kod incelemesi de önemlidir.

Örnek: Bağımlılıklardaki açıkları tespit etmek için `cargo audit` kullanımı:

```sh
cargo install cargo-audit
cargo audit
```

Bu komut, bağımlılıklarınızda bilinen güvenlik açıklarını raporlar. Ayrıca, `unsafe` kullanımlarını, hata yönetimini ve harici crate kullanımını gözden geçirin.
