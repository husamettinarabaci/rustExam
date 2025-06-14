## 📘 Bölüm: Yaşam Süreleri (Lifetimes)  
### 🔹 Kategori: Struct ve Lifetime  
#### ✅ Cevap 144: Struct'ta lifetime kullanımı

**Açıklama:**
Referans tutan struct'larda lifetime parametresi gerekir.

```rust
struct Tutucu<'a> {
    s: &'a str,
}
let t = Tutucu { s: "merhaba" };
```
