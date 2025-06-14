## 📘 Bölüm: Modüller ve Paketler  
### 🔹 Kategori: Harici Crate Kullanımı  
#### ✅ Cevap 137: Harici crate kullanımı

**Açıklama:**
`Cargo.toml` dosyasına `[dependencies]` altında eklenir ve kodda kullanılır.

```toml
[dependencies]
rand = "0.8"
```
```rust
use rand::Rng;
let n = rand::thread_rng().gen_range(1..10);
```
