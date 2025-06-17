## 📘 Bölüm: Akıllı İşaretçiler ve İçsel Değiştirilebilirlik  
### 🔹 Kategori: Rc<RefCell<T>> ile Tek İş Parçacıklı Ağaç Yapısı  
#### ✅ Cevap 273: Tek iş parçacıklı ağaç yapısında `Rc<RefCell<T>>` kullanımı

`Rc<RefCell<T>>` kombinasyonu, tek iş parçacıklı ortamlarda ağaç gibi veri yapılarında hem birden fazla sahiplik hem de içsel değiştirilebilirlik sağlar. `Rc` ile birden fazla düğümün aynı veriye sahip olmasına izin verilirken, `RefCell` ile çalışma zamanında değişiklik yapılabilir. Aşağıdaki örnekte, ikili bir ağaç yapısı oluşturulmuş ve düğümler arası bağlantılar `Rc<RefCell<T>>` ile sağlanmıştır.

```rust
use std::cell::RefCell;
use std::rc::Rc;

type NodeRef = Rc<RefCell<Node>>;

struct Node {
    value: i32,
    left: Option<NodeRef>,
    right: Option<NodeRef>,
}

fn main() {
    let left = Rc::new(RefCell::new(Node { value: 1, left: None, right: None }));
    let right = Rc::new(RefCell::new(Node { value: 3, left: None, right: None }));
    let root = Rc::new(RefCell::new(Node { value: 2, left: Some(left.clone()), right: Some(right.clone()) }));

    // Sol çocuğun değerini güncelle
    left.borrow_mut().value = 10;

    // Kök ve çocuk düğümlerin değerlerini yazdır
    println!("Kök: {}", root.borrow().value);
    println!("Sol: {}", root.borrow().left.as_ref().unwrap().borrow().value);
    println!("Sağ: {}", root.borrow().right.as_ref().unwrap().borrow().value);
}
```
