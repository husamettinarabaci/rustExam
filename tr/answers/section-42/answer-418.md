## 📘 Bölüm: Koleksiyonlar: Vec, HashMap, HashSet
### 🔹 Kategori: Küme İşlemleri (Birleşim, Kesişim, Fark)
#### ✅ Cevap 418: Küme işlemleri (birleşim, kesişim, fark)

`HashSet` ile birleşim, kesişim ve fark işlemleri kolayca yapılabilir. Sonuçlar yine HashSet döndürür.

```rust
use std::collections::HashSet;

fn main() {
    let set1: HashSet<_> = [1, 2, 3].iter().cloned().collect();
    let set2: HashSet<_> = [2, 3, 4].iter().cloned().collect();
    println!("Birleşim: {:?}", set1.union(&set2).collect::<Vec<_>>());
    println!("Kesişim: {:?}", set1.intersection(&set2).collect::<Vec<_>>());
    println!("Fark: {:?}", set1.difference(&set2).collect::<Vec<_>>());
}
```
