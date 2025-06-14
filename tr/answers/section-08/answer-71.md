## 📚 Bölüm: Jenerikler  
### 🔹 Kategori: Jenerik Fonksiyonlar  
#### ✅ Cevap 71: Jenerik fonksiyon yazmak

**Açıklama:**
Jenerik fonksiyonlar, her tür ile çalışabilen kod yazmanızı sağlar. Trait sınırları ile türler kısıtlanabilir.

```rust
use std::fmt::Debug;

fn print_item<T: Debug>(item: T) {
    println!("{:?}", item);
}

fn main() {
    print_item(42);
    print_item("merhaba");
}
```
