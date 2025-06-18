## 📘 Bölüm: Crate Dışı API Tasarımı ve Sürümleme  
### 🔹 Kategori: Özellik Bayrakları ve Koşullu Derleme  
#### ✅ Cevap 835: Özellik bayrakları ve koşullu derleme

Özellik bayrakları, Cargo.toml'da tanımlanan ve crate'in isteğe bağlı işlevselliğini kontrol eden ayarlardır. Koşullu derleme ile belirli kod blokları sadece ilgili özellik etkinse derlenir:

```toml
[features]
default = []
serde = ["serde"]
```

```rust
#[cfg(feature = "serde")]
fn serialize() { /* ... */ }
```

Bu yöntem, API'nin esnekliğini ve modülerliğini artırır.
