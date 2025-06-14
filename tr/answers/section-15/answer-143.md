## 📘 Bölüm: Yaşam Süreleri (Lifetimes)  
### 🔹 Kategori: Lifetime Elision  
#### ✅ Cevap 143: Lifetime elision kuralları

**Açıklama:**
Lifetime elision, bazı durumlarda lifetime'ların otomatik olarak çıkarılmasını sağlar.

```rust
fn ilk(s: &str) -> &str {
    &s[0..1]
}
```
