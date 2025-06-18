## 📘 Bölüm: İleri Sahiplik: Grafikler, Döngüler ve İçsel Değiştirilebilirlik  
### 🔹 Kategori: Paylaşımlı Sahiplik ile Ağaç Yapısı  
#### ✅ Cevap 704: Paylaşımlı sahiplik ile ağaç yapısı implementasyonu

`Rc` ve `RefCell` kullanarak bir ağaç yapısı oluşturulabilir. Her düğüm birden fazla çocuğa sahip olabilir ve çocuklar üzerinde değişiklik yapılabilir. Bu, sahipliğin paylaşılmasını ve içsel değiştirilebilirliği mümkün kılar.

```rust
use std::cell::RefCell;
use std::rc::Rc;

type NodeRef = Rc<RefCell<Node>>;

struct Node {
    value: i32,
    children: Vec<NodeRef>,
}

fn main() {
    let root = Rc::new(RefCell::new(Node { value: 1, children: vec![] }));
    let child1 = Rc::new(RefCell::new(Node { value: 2, children: vec![] }));
    let child2 = Rc::new(RefCell::new(Node { value: 3, children: vec![] }));
    root.borrow_mut().children.push(child1.clone());
    root.borrow_mut().children.push(child2.clone());
    // root -> [child1, child2]
}
```
