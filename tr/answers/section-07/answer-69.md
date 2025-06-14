## 📚 Bölüm: Koleksiyonlar  
### 🔹 Kategori: BTreeMap  
#### ✅ Cevap 69: BTreeMap kullanmak

**Açıklama:**
`BTreeMap` anahtar-değer çiftlerini sıralı tutar. Sıralı olarak gezilebilir.

```rust
use std::collections::BTreeMap;

fn main() {
    let mut map = BTreeMap::new();
    map.insert("a", 1);
    map.insert("b", 2);
    for (k, v) in &map {
        println!("{}: {}", k, v);
    }
}
```
