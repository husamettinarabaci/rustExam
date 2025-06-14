## 📘 Bölüm: Yaşam Süreleri (Lifetimes)  
### 🔹 Kategori: Static Lifetime  
#### ✅ Cevap 146: 'static lifetime nedir?

**Açıklama:**
`'static` lifetime, referansın programın tüm ömrü boyunca geçerli olduğu anlamına gelir. String literal ve global verilerde kullanılır.

```rust
let s: &'static str = "merhaba";
```
