## 📘 Bölüm: Akıllı İşaretçiler ve İçsel Değiştirilebilirlik  
### 🔹 Kategori: Referans Döngüleri ve Önlenmesi  
#### ✅ Cevap 280: Referans döngülerini anlama ve önleme

Bu soruda, `Rc` ve `RefCell` ile referans döngüsünün nasıl oluştuğu ve bunun neden hafıza sızıntısına yol açabileceği gösterilmektedir. Ardından, `Weak` referansları kullanarak döngünün nasıl önlenebileceği örneklenir. `Weak` referanslar, referans sayacını artırmaz ve böylece döngü oluşmaz.

```rust
use std::cell::RefCell;
use std::rc::{Rc, Weak};

#[derive(Debug)]
struct Node {
    value: i32,
    next: RefCell<Option<Rc<Node>>>,
    prev: RefCell<Option<Weak<Node>>>,
}

fn main() {
    let first = Rc::new(Node {
        value: 1,
        next: RefCell::new(None),
        prev: RefCell::new(None),
    });
    let second = Rc::new(Node {
        value: 2,
        next: RefCell::new(None),
        prev: RefCell::new(None),
    });

    // Referans döngüsü oluşturuluyor
    *first.next.borrow_mut() = Some(Rc::clone(&second));
    *second.prev.borrow_mut() = Some(Rc::downgrade(&first));

    println!("first strong = {}, weak = {}", Rc::strong_count(&first), Rc::weak_count(&first));
    println!("second strong = {}, weak = {}", Rc::strong_count(&second), Rc::weak_count(&second));
}
```

Yukarıdaki örnekte, `Weak` referans kullanıldığı için döngü oluşmaz ve hafıza sızıntısı engellenir.
