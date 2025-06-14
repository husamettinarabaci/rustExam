## 📘 Bölüm: Koleksiyonlar  
### 🔹 Kategori: HashSet  
#### ✅ Cevap 128: HashSet nedir?

**Açıklama:**
`HashSet` benzersiz değerler tutar. `HashMap`'ten farkı sadece anahtarları saklamasıdır.

```rust
use std::collections::HashSet;
let mut set = HashSet::new();
set.insert(1);
let var_mi = set.contains(&1);
```
