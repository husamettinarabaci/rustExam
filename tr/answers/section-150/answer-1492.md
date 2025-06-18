## 📘 Bölüm: Geleceğe Hazır Rust Mimarileri
### 🔹 Kategori: Kademeli Geçiş için Özellik Bayrakları Kullanımı
#### ✅ Cevap 1492: Kademeli geçiş için özellik bayrakları kullanımı

Feature flag'ler, yeni özellikleri kademeli olarak devreye almak ve eski davranışları korumak için kullanılır. Cargo.toml'da tanımlanır ve kodda `cfg` ile kontrol edilir. Eski ve yeni kodun birlikte test edilmesi, flag'lerin dokümante edilmesi önemlidir.

```rust
// Feature flag ile kademeli geçiş:
// 1. Cargo.toml'da flag tanımlayın.
// 2. Kodda `#[cfg(feature = "yeni_ozellik")]` ile yeni davranışı ekleyin.
// 3. Eski ve yeni kodu birlikte test edin.
// 4. Flag'leri ve etkilerini dokümante edin.
// 5. Gereksiz flag'leri zamanla kaldırın.
```
