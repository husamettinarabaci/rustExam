## 📘 Bölüm: Koleksiyonlar ve İteratörler
### 🔹 Kategori: İteratör Adaptörleri ve Zincirleme
#### ✅ Cevap 335: İteratör sonuçlarını koleksiyonlara toplama

Bu çözümde, bir vektör üzerinde `filter` ve `map` adaptörleriyle 5'ten büyük elemanlar seçilip 3 ile çarpılır. Sonuçlar hem bir vektöre (`Vec`) hem de bir `HashSet`'e toplanır ve ekrana yazdırılır. `collect` metodu ile farklı koleksiyon türlerine dönüştürme yapılır.

```rust
use std::collections::HashSet;

fn main() {
    let numbers = vec![1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let iter = numbers.iter().filter(|x| **x > 5).map(|x| x * 3);
    let vec_result: Vec<_> = iter.clone().collect();
    let set_result: HashSet<_> = numbers.iter().filter(|x| **x > 5).map(|x| x * 3).collect();
    println!("Vektör: {:?}", vec_result);
    println!("HashSet: {:?}", set_result);
}
```
