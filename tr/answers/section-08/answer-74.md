## 📚 Bölüm: Jenerikler  
### 🔹 Kategori: Trait Sınırları  
#### ✅ Cevap 74: Jeneriklerde trait sınırı kullanmak

**Açıklama:**
Trait sınırları, jenerik türlerin belirli trait'leri uygulamasını zorunlu kılar.

```rust
use std::fmt::Display;

fn yazdir<T: Display>(deger: T) {
    println!("{}", deger);
}

fn main() {
    yazdir(123);
    yazdir("abc");
}
```
