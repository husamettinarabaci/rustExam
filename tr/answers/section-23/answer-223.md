## 📘 Bölüm: Jenerikler II  
### 🔹 Kategori: Jenerik where ifadeleri  
#### ✅ Cevap 223: Jenerik where ifadeleri

`where` ifadesi, jenerik türler için trait sınırlarını belirtmekte kullanılabilir. Burada, `max_and_display` fonksiyonu `T: PartialOrd + Display` için `where` ifadesi kullanır.

```rust
use std::fmt::Display;

fn max_and_display<T>(a: T, b: T)
where
    T: PartialOrd + Display,
{
    if a > b {
        println!("Maksimum: {}", a);
    } else {
        println!("Maksimum: {}", b);
    }
}

fn main() {
    max_and_display(10, 20);
    max_and_display("elma", "armut");
}
```
Bu fonksiyon, karşılaştırılabilen ve ekrana yazdırılabilen tüm türlerle çalışır (ör. tamsayılar, string dilimleri).
