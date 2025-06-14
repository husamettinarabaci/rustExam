## 📘 Bölüm: Yaşam Süreleri (Lifetimes)  
### 🔹 Kategori: Lifetime Hataları  
#### ✅ Cevap 147: Lifetime hataları

**Açıklama:**
Lifetime hatası, bir referansın işaret ettiği veriden daha uzun yaşaması durumunda oluşur. Çözüm için lifetime veya sahiplik ayarlanmalıdır.

```rust
fn hatali<'a>(x: &'a str) -> &'a str {
    let y = String::from("merhaba");
    // &y // hata: `y` yeterince uzun yaşamıyor
    x
}
```
