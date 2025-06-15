## 📘 Bölüm: Jenerikler I  
### 🔹 Kategori: Jenerik tür parametreleri  
#### ✅ Cevap 217: Jenerik tür parametreleri

Bir fonksiyonda jenerik tür parametresi kullanmak için, tür parametresini trait sınırı ile belirtin. Burada, `display_twice` fonksiyonu `Display` trait'ini uygulayan herhangi bir türü kabul eder.

```rust
use std::fmt::Display;

fn display_twice<T: Display>(value: T) {
    print!("{} {}", value, value);
}

fn main() {
    display_twice(42);
    println!("");
    display_twice("merhaba");
}
```
Bu fonksiyon, tamsayılar ve string dilimleri gibi `Display` trait'ini uygulayan tüm türlerle çalışır.
