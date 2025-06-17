## 📘 Bölüm: Koleksiyonlar: Vec, HashMap, HashSet
### 🔹 Kategori: HashSet ile Benzersiz Sırasız Değerler
#### ✅ Cevap 417: Benzersiz sırasız değerler için HashSet kullanımı

`HashSet` ile aynı değerden birden fazla ekleseniz de, her değer yalnızca bir kez saklanır.

```rust
use std::collections::HashSet;

fn main() {
    let mut set = HashSet::new();
    set.insert("elma");
    set.insert("armut");
    set.insert("elma");
    for v in &set {
        println!("{}", v);
    }
}
```
