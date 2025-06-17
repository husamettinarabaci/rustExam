## 📘 Bölüm: Akıllı İşaretçiler ve Kaynak Yönetimi  
### 🔹 Kategori: Weak<T> ile bellek sızıntılarını önleme  
#### ✅ Cevap 438: Weak<T> ile bellek sızıntılarını önleme

`Rc<T>` ile referans döngüsü oluşursa bellek sızıntısı olur. `Weak<T>` ile döngü kırılarak sızıntı önlenir.

```rust
use std::rc::{Rc, Weak};
use std::cell::RefCell;

struct Node {
    value: i32,
    next: Option<Rc<RefCell<Node>>>,
    prev: Option<Weak<RefCell<Node>>>,
}
```
