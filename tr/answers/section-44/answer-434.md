## 📘 Bölüm: Akıllı İşaretçiler ve Kaynak Yönetimi  
### 🔹 Kategori: Veri yapılarında Rc<RefCell<T>> birleştirme  
#### ✅ Cevap 434: Veri yapılarında Rc<RefCell<T>> birleştirme

`Rc<RefCell<T>>`, hem paylaşımlı sahiplik hem de içsel değiştirilebilirlik sağlar. Birden fazla referans üzerinden veri değiştirilebilir.

```rust
use std::rc::Rc;
use std::cell::RefCell;

fn main() {
    let data = Rc::new(RefCell::new(1));
    let a = Rc::clone(&data);
    *a.borrow_mut() += 10;
    println!("Değer: {}", data.borrow());
}
```
