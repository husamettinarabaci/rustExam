## 📘 Bölüm: Profil ve Performans Ayarı  
### 🔹 Kategori: Bellek Sızıntılarını Tespit ve Düzeltme  
#### ✅ Cevap 979: Bellek sızıntılarını tespit ve düzeltme

Rust'ta bellek sızıntıları genellikle `Rc` veya `Arc` ile referans döngüsü oluştuğunda meydana gelir. `valgrind` veya `address sanitizer` ile sızıntılar tespit edilebilir.

Örnek sızıntı:
```rust
use std::rc::Rc;
use std::cell::RefCell;

struct Node {
    next: Option<Rc<RefCell<Node>>>,
}

fn main() {
    let a = Rc::new(RefCell::new(Node { next: None }));
    let b = Rc::new(RefCell::new(Node { next: Some(a.clone()) }));
    a.borrow_mut().next = Some(b.clone()); // referans döngüsü
    // a ve b asla serbest bırakılmaz
}
```

Çözüm: `Weak` referans kullanmak.

Tespit için:
```
valgrind --leak-check=full ./target/release/<program_adı>
```
veya
```
RUSTFLAGS="-Z sanitizer=address" cargo run
```
Sızıntı raporunda döngü tespit edilir.
