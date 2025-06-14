## 📚 Bölüm: Koleksiyonlar  
### 🔹 Kategori: HashSet  
#### ✅ Cevap 66: HashSet kullanmak

**Açıklama:**
`HashSet` benzersiz değerler tutar. Eleman ekleyip üyelik kontrolü yapabilirsiniz.

```rust
use std::collections::HashSet;

fn main() {
    let mut set = HashSet::new();
    set.insert(1);
    set.insert(2);
    println!("1 var mı? {}", set.contains(&1));
}
```
