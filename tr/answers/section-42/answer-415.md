## 📘 Bölüm: Koleksiyonlar: Vec, HashMap, HashSet
### 🔹 Kategori: HashMap'te Girişlere Erişim ve Güncelleme
#### ✅ Cevap 415: HashMap'te girişlere erişim ve güncelleme

Bir HashMap'te bir anahtarın değerine erişmek için `get`, güncellemek için `insert` kullanılır. `get` bir Option döndürür.

```rust
use std::collections::HashMap;

fn main() {
    let mut map = HashMap::new();
    map.insert("elma".to_string(), 3);
    map.insert("armut".to_string(), 5);
    map.insert("elma".to_string(), 10); // güncelleme
    if let Some(val) = map.get("elma") {
        println!("elma: {}", val);
    }
}
```
