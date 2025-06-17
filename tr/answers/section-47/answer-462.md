## 📘 Bölüm: Workspace ve Paket Organizasyonu
### 🔹 Kategori: Workspace'e birden fazla paket (crate) ekleme
#### ✅ Cevap 462: Workspace'e birden fazla paket (crate) ekleme

Bir Cargo workspace'e birden fazla crate eklemek için ana dizinde `Cargo.toml`'da üyeleri belirtin ve her crate için ayrı klasör oluşturun.

```rust
# Ana Cargo.toml
[workspace]
members = [
    "crate1",
    "crate2"
]
```

Her crate kendi Cargo.toml dosyasına sahip olmalıdır.
