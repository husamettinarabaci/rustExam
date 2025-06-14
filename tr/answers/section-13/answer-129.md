## 📘 Bölüm: Koleksiyonlar  
### 🔹 Kategori: Koleksiyonlardan Eleman Silme  
#### ✅ Cevap 129: Koleksiyonlardan eleman silme

**Açıklama:**
`HashSet`/`HashMap` için `.remove()`, vektör için `.remove()` veya `.pop()` kullanılır.

```rust
let mut v = vec![1, 2, 3];
v.pop();
use std::collections::{HashMap, HashSet};
let mut map = HashMap::new();
map.insert("a", 1);
map.remove("a");
let mut set = HashSet::new();
set.insert(1);
set.remove(&1);
```
