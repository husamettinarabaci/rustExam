## 📘 Bölüm: İleri Düzey Traitler ve Jenerikler  
### 🔹 Kategori: Blanket Implementations  
#### ✅ Cevap 156: Traitler için blanket implementasyonlar oluşturma

Blanket implementasyonlar, belirli bir trait'i uygulayan tüm tipler için başka bir trait'i uygulamanıza olanak tanır. Burada, `Printable` trait'i `Display` trait'ini uygulayan tüm tipler için uygulanmıştır.

```rust
use std::fmt::Display;

trait Printable {
    fn print(&self);
}

impl<T: Display> Printable for T {
    fn print(&self) {
        println!("{}", self);
    }
}
```
