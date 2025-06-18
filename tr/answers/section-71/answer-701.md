## 📘 Bölüm: İleri Sahiplik: Grafikler, Döngüler ve İçsel Değiştirilebilirlik  
### 🔹 Kategori: Rc, RefCell ve Döngüsel Grafikler  
#### ✅ Cevap 701: Rc<RefCell<T>> ile döngüsel grafik oluşturma

`Rc<RefCell<T>>` kullanarak döngüsel referanslar oluşturmak mümkündür. Bu örnekte, iki düğüm birbirine referans vererek bir döngü oluşturur. `Rc` sahipliği paylaşırken, `RefCell` içsel değiştirilebilirlik sağlar.

```rust
use std::cell::RefCell;
use std::rc::Rc;

struct Node {
    value: i32,
    next: Option<Rc<RefCell<Node>>>,
}

fn main() {
    let a = Rc::new(RefCell::new(Node { value: 1, next: None }));
    let b = Rc::new(RefCell::new(Node { value: 2, next: Some(a.clone()) }));
    // Döngü oluşturuluyor:
    a.borrow_mut().next = Some(b.clone());
    // Artık a -> b -> a şeklinde bir döngü var
}
```
