## 📘 Bölüm: Koleksiyonlar ve İteratörler
### 🔹 Kategori: Koleksiyonlar Üzerinde Yineleme
#### ✅ Cevap 332: Koleksiyonlar üzerinde `for` döngüsü ile yineleme

Bu örnekte, bir `Vec`, bir `HashMap` ve bir `HashSet` üzerinde `for` döngüsü ile nasıl yineleme yapılacağını görebilirsiniz. Her koleksiyonun elemanları uygun şekilde yazdırılır. `HashMap` üzerinde yineleme sırasında anahtar ve değer birlikte alınır.

```rust
use std::collections::{HashMap, HashSet};

fn main() {
    let v = vec![1, 2, 3];
    let mut m = HashMap::new();
    m.insert("a", 10);
    m.insert("b", 20);
    let mut s = HashSet::new();
    s.insert("apple");
    s.insert("banana");

    println!("Vec elemanları:");
    for x in &v {
        println!("{}", x);
    }

    println!("HashMap anahtar-değer çiftleri:");
    for (k, v) in &m {
        println!("{}: {}", k, v);
    }

    println!("HashSet elemanları:");
    for item in &s {
        println!("{}", item);
    }
}
```
