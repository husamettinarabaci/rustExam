## 📘 Bölüm: Koleksiyonlar: Vec, HashMap, HashSet
### 🔹 Kategori: contains_key ile Anahtar Varlığını Kontrol Etme
#### ✅ Cevap 416: contains_key ile anahtar varlığını kontrol etme

Bir anahtarın HashMap'te olup olmadığını `contains_key` ile kontrol edebilirsiniz.

```rust
use std::collections::HashMap;

fn main() {
    let mut map = HashMap::new();
    map.insert("elma".to_string(), 3);
    map.insert("armut".to_string(), 5);
    println!("muz var mı? {}", map.contains_key("muz"));
}
```
