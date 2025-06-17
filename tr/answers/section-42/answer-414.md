## 📘 Bölüm: Koleksiyonlar: Vec, HashMap, HashSet
### 🔹 Kategori: Anahtar-Değer Çiftleri için HashMap Kullanımı
#### ✅ Cevap 414: Anahtar-değer çiftleri için HashMap kullanımı

`HashMap` anahtar-değer çiftlerini saklamak için kullanılır. `insert` ile ekleme yapılır, `iter` ile tüm çiftler gezilebilir.

```rust
use std::collections::HashMap;

fn main() {
    let mut map = HashMap::new();
    map.insert("elma".to_string(), 3);
    map.insert("armut".to_string(), 5);
    for (k, v) in &map {
        println!("{}: {}", k, v);
    }
}
```
