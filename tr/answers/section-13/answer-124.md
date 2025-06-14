## 📘 Bölüm: Koleksiyonlar  
### 🔹 Kategori: String ve &str  
#### ✅ Cevap 124: String ve &str farkı

**Açıklama:**
`String` sahipli, büyüyebilen bir string'dir. `&str` ise ödünç alınan bir string dilimidir. `.as_str()` veya `to_string()` ile dönüşüm yapılır.

```rust
let s: String = String::from("merhaba");
let dilim: &str = &s;
let s2 = dilim.to_string();
```
