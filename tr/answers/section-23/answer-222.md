## 📘 Bölüm: Jenerikler II  
### 🔹 Kategori: Jenerik trait sınırları  
#### ✅ Cevap 222: Jenerik trait sınırları

Trait sınırları ile jenerik türleri kısıtlayabilirsiniz. Burada, `sum_and_display` fonksiyonu `T: Add<Output = T> + Display` gerektirir.

```rust
use std::ops::Add;
use std::fmt::Display;

fn sum_and_display<T: Add<Output = T> + Display>(a: T, b: T) {
    let sum = a + b;
    println!("Toplam: {}", sum);
}

fn main() {
    sum_and_display(5, 7);
    sum_and_display(2.5, 3.5);
}
```
Bu fonksiyon, toplama ve ekrana yazdırma destekleyen tüm türlerle çalışır (ör. tamsayılar, ondalıklı sayılar).
