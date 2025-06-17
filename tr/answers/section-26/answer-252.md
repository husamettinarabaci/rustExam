## 📘 Bölüm: Karmaşık Yapılarda Sahiplik  
### 🔹 Kategori: Akıllı İşaretçiler ve İçsel Değiştirilebilirlik  
#### ✅ Cevap 252: Bir veri modelinde `Box`, `Rc` ve `RefCell`'i birleştirme

Bu örnekte, `Box`, `Rc` ve `RefCell`'in tek bir veri modelinde nasıl birleştirilebileceği gösterilmektedir. `Box<T>` heap üzerinde veri tutmak için, `Rc<T>` çoklu sahiplik için ve `RefCell<T>` ise çalışma zamanında içsel değiştirilebilirlik için kullanılır. Bu desen, özellikle düğümlerin paylaşıldığı ve değiştirildiği ağaç veya grafik yapılarında yaygındır.

```rust
use std::cell::RefCell;
use std::rc::Rc;

struct Dugum {
    deger: i32,
    sonraki: Option<Rc<RefCell<Dugum>>>,
}

fn main() {
    let ilk = Rc::new(RefCell::new(Dugum { deger: 1, sonraki: None }));
    let ikinci = Rc::new(RefCell::new(Dugum { deger: 2, sonraki: None }));
    ilk.borrow_mut().sonraki = Some(Rc::clone(&ikinci));
    // Paylaşımlı sahiplik ile ikinci düğümü değiştir
    ikinci.borrow_mut().deger = 42;
    // Değerleri yazdır
    println!("İlk: {}", ilk.borrow().deger);
    if let Some(ref sonraki) = ilk.borrow().sonraki {
        println!("İkinci: {}", sonraki.borrow().deger);
    }
}
```
