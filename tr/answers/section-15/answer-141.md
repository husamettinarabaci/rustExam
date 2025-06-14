## 📘 Bölüm: Yaşam Süreleri (Lifetimes)  
### 🔹 Kategori: Lifetime Temelleri  
#### ✅ Cevap 141: Rust'ta lifetime nedir?

**Açıklama:**
Lifetime, Rust'ın referansların ne kadar süreyle geçerli olacağını takip etmesini sağlar. Dangling reference'ları önler ve bellek güvenliği sağlar.

```rust
fn en_uzun<'a>(x: &'a str, y: &'a str) -> &'a str {
    if x.len() > y.len() { x } else { y }
}
```
