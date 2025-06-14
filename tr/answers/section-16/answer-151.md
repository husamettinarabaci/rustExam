## 📘 Bölüm: İleri Düzey Traitler ve Jenerikler  
### 🔹 Kategori: Trait Sınırları ve Where Kullanımı  
#### ✅ Cevap 151: Fonksiyon imzalarında trait sınırlarının kullanımı

Bu fonksiyon, jenerik bir fonksiyonda birden fazla trait sınırının nasıl kullanılacağını gösterir. Hem `Display` hem de `Debug` belirtilerek değer iki farklı formatta yazdırılabilir.

```rust
use std::fmt::{Display, Debug};

fn print_info<T: Display + Debug>(value: T) {
    println!("Display: {}", value);
    println!("Debug: {:?}", value);
}
```
