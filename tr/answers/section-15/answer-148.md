## 📘 Bölüm: Yaşam Süreleri (Lifetimes)  
### 🔹 Kategori: Metotlarda Lifetime  
#### ✅ Cevap 148: Metotlarda lifetime kullanımı

**Açıklama:**
Metotlarda lifetime parametresi genellikle struct'ın lifetime'ı ile aynıdır.

```rust
struct Tutucu<'a> { s: &'a str }
impl<'a> Tutucu<'a> {
    fn al(&self) -> &'a str { self.s }
}
```
