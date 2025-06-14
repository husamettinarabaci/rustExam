## 📘 Bölüm: Koleksiyonlar  
### 🔹 Kategori: HashMap  
#### ✅ Cevap 127: HashMap üzerinde yineleme

**Açıklama:**
Anahtar-değer çiftleri üzerinde `for` döngüsü ile yineleme yapılır.

```rust
use std::collections::HashMap;
let mut map = HashMap::new();
map.insert("a", 1);
for (k, v) in &map {
    println!("{}: {}", k, v);
}
```
