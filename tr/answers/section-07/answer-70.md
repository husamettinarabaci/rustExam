## 📚 Bölüm: Koleksiyonlar  
### 🔹 Kategori: BTreeSet  
#### ✅ Cevap 70: BTreeSet kullanmak

**Açıklama:**
`BTreeSet` benzersiz değerleri sıralı tutar. Sıralı olarak gezilebilir.

```rust
use std::collections::BTreeSet;

fn main() {
    let mut set = BTreeSet::new();
    set.insert(3);
    set.insert(1);
    set.insert(2);
    for x in &set {
        println!("{}", x);
    }
}
```
