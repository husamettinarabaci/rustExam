## 📘 Bölüm: Koleksiyonlar ve İteratörler
### 🔹 Kategori: İteratörler ve Koleksiyonlar
#### ✅ Cevap 336: `.enumerate()` ve `zip()` ile yineleme

Bu soruda, `.enumerate()` ile bir vektörün elemanlarını indeksleriyle birlikte, `.zip()` ile ise iki koleksiyonun elemanlarını eşzamanlı olarak yineleyebilirsiniz. HashSet sırasız olduğu için, zip ile eşleşen elemanlar rastgele olabilir.

```rust
use std::collections::HashSet;

fn main() {
    let vec = vec![10, 20, 30, 40];
    let set: HashSet<_> = [100, 200, 300, 400].iter().cloned().collect();

    // enumerate ile vektör üzerinde indeksli yineleme
    for (i, val) in vec.iter().enumerate() {
        println!("vec[{}] = {}", i, val);
    }

    // zip ile vektör ve HashSet üzerinde eşzamanlı yineleme
    for (v, s) in vec.iter().zip(set.iter()) {
        println!("vec: {}, set: {}", v, s);
    }
}
```
