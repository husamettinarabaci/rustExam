## 📘 Bölüm: Jenerikler I  
### 🔹 Kategori: Jenerik kısıtlamalar  
#### ✅ Cevap 220: Jenerik kısıtlamalar

Birden fazla trait sınırı ile jenerik türleri kısıtlayabilirsiniz. Burada, `compare_and_display` fonksiyonu `T: PartialOrd + Display` gerektirir.

```rust
use std::fmt::Display;

fn compare_and_display<T: PartialOrd + Display>(a: T, b: T) {
    if a > b {
        println!("Büyük: {}", a);
    } else {
        println!("Büyük: {}", b);
    }
}

fn main() {
    compare_and_display(10, 20);
    compare_and_display("elma", "armut");
}
```
Bu fonksiyon, karşılaştırılabilen ve ekrana yazdırılabilen tüm türlerle çalışır (ör. tamsayılar, string dilimleri).
