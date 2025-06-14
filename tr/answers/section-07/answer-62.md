## 📚 Bölüm: Koleksiyonlar  
### 🔹 Kategori: HashMap'ler  
#### ✅ Cevap 62: HashMap kullanmak

**Açıklama:**
`HashMap` anahtar-değer çiftleri tutar. Değer ekleyip alabilirsiniz.

```rust
use std::collections::HashMap;

fn main() {
    let mut map = HashMap::new();
    map.insert("a", 1);
    map.insert("b", 2);
    println!("a: {:?}", map.get("a"));
}
```
