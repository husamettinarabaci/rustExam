## 📘 Bölüm: Koleksiyonlar ve İteratörler  
### 🔹 Kategori: Koleksiyonlar üzerinde yineleme  
#### ✅ Cevap 333: .iter(), .iter_mut() ve .into_iter() kullanımı

Bu örnekte, `Vec`, `HashMap` ve `HashSet` koleksiyonları üzerinde `.iter()`, `.iter_mut()` ve `.into_iter()` metodları ile yineleme yapılır. `.iter()` referansla, `.iter_mut()` değiştirilebilir referansla, `.into_iter()` ise sahipliği alarak yineleme yapar. `Vec` üzerinde `.iter_mut()` ile elemanlar değiştirilebilir.

```rust
use std::collections::{HashMap, HashSet};

fn main() {
    let mut vec = vec![1, 2, 3];
    let mut map = HashMap::new();
    map.insert("a", 10);
    map.insert("b", 20);
    let mut set = HashSet::new();
    set.insert("apple");
    set.insert("banana");

    // .iter()
    for v in vec.iter() {
        println!("Vec .iter(): {}", v);
    }

    // .iter_mut()
    for v in vec.iter_mut() {
        *v *= 2;
        println!("Vec .iter_mut(): {}", v);
    }

    // .into_iter()
    for v in vec.into_iter() {
        println!("Vec .into_iter(): {}", v);
    }

    // HashMap .iter()
    for (k, v) in map.iter() {
        println!("HashMap .iter(): {} -> {}", k, v);
    }

    // HashSet .iter()
    for s in set.iter() {
        println!("HashSet .iter(): {}", s);
    }
}
```
