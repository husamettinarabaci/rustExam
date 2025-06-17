## 📘 Bölüm: Koleksiyonlar ve İteratörler  
### 🔹 Kategori: Vec, HashMap ve HashSet ile Çalışma  
#### ✅ Cevap 331: Vec, HashMap ve HashSet ile çalışma

Bu örnekte, bir `Vec`, bir `HashMap` ve bir `HashSet` oluşturulup başlatılır. Her koleksiyona değerler eklenir ve içerikleri ekrana yazdırılır.

```rust
use std::collections::{HashMap, HashSet};

fn main() {
    let mut v = vec![1, 2, 3];
    let mut m = HashMap::new();
    m.insert("a", 10);
    m.insert("b", 20);
    let mut s = HashSet::new();
    s.insert("apple");
    s.insert("banana");

    println!("Vec: {:?}", v);
    println!("HashMap: {:?}", m);
    println!("HashSet: {:?}", s);
}
```
