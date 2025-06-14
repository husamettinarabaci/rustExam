## 📚 Bölüm: Jenerikler  
### 🔹 Kategori: Jenerik Kısıtlamalar  
#### ✅ Cevap 79: Jenerik kısıtlamalar eklemek

**Açıklama:**
Birden fazla trait sınırı `+` ile eklenebilir.

```rust
use std::fmt::Debug;

fn yazdir_ve_klonla<T: Debug + Clone>(item: T) {
    println!("{:?}", item.clone());
}

fn main() {
    yazdir_ve_klonla(5);
}
```
