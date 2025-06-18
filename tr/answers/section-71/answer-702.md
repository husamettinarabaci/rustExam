## 📘 Bölüm: İleri Sahiplik: Grafikler, Döngüler ve İçsel Değiştirilebilirlik  
### 🔹 Kategori: Weak ve Döngü Kırma  
#### ✅ Cevap 702: Weak<T> ile referans döngülerini kırma

`Weak<T>` referanslar, sahiplik zincirini kırarak döngüsel referansların önlenmesini sağlar. Bu örnekte, bir düğümün ebeveynine olan bağlantısı `Weak` ile tutulur, böylece döngü oluşmaz ve bellek sızıntısı engellenir.

```rust
use std::cell::RefCell;
use std::rc::{Rc, Weak};

struct Node {
    value: i32,
    parent: RefCell<Weak<Node>>,
    child: RefCell<Option<Rc<Node>>>,
}

fn main() {
    let parent = Rc::new(Node {
        value: 1,
        parent: RefCell::new(Weak::new()),
        child: RefCell::new(None),
    });
    let child = Rc::new(Node {
        value: 2,
        parent: RefCell::new(Rc::downgrade(&parent)),
        child: RefCell::new(None),
    });
    *parent.child.borrow_mut() = Some(child.clone());
    // parent -> child, child -> parent (Weak)
    // Weak referans sayesinde döngüsel sahiplik oluşmaz
}
```
