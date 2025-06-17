## 📘 Bölüm: Workspace ve Paket Organizasyonu
### 🔹 Kategori: Yeni bir Cargo workspace oluşturma
#### ✅ Cevap 461: Yeni bir Cargo workspace oluşturma

Cargo workspace, birden fazla crate'i tek bir projede yönetmek için kullanılır. Ana dizinde bir `Cargo.toml` dosyası ve alt dizinlerde crate'ler bulunur. Workspace üyeleri ana `Cargo.toml`'da tanımlanır.

```rust
# Ana dizinde Cargo.toml
[workspace]
members = [
    "crate1",
    "crate2"
]
```

Her crate için ayrı bir klasör ve kendi Cargo.toml dosyası oluşturulur.
