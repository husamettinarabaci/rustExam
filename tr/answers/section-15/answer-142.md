## 📘 Bölüm: Yaşam Süreleri (Lifetimes)  
### 🔹 Kategori: Lifetime Temelleri  
#### ✅ Cevap 142: Lifetime anotasyonları

**Açıklama:**
Lifetime anotasyonları, referansların ne kadar süreyle geçerli olacağını belirtir. `'a` sözdizimiyle fonksiyon imzasında kullanılır.

```rust
fn ilk<'a>(s: &'a str) -> &'a str {
    &s[0..1]
}
```
