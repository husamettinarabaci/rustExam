## 📘 Bölüm: Akıllı İşaretçiler ve İçsel Değiştirilebilirlik  
### 🔹 Kategori: Akıllı İşaretçileri Birleştirme  
#### ✅ Cevap 278: İç içe yapılarda akıllı işaretçileri birleştirme

Bu örnekte, bir ağaç yapısında hem `Rc<RefCell<T>>` hem de `Box<T>` kullanılarak sahiplik ve paylaşım gereksinimleri karşılanır. Kök düğümün çocukları paylaşılabilir ve değiştirilebilirken, her düğümün değeri sahipliğini korur. `Rc` ile çoklu sahiplik, `RefCell` ile çalışma zamanında değiştirilebilirlik, `Box` ile ise sahiplik sağlanır.

```rust
use std::cell::RefCell;
use std::rc::Rc;

// Her düğümün değeri Box ile sahiplenilir, çocuklar Rc<RefCell<Node>> ile paylaşılır ve değiştirilebilir.
struct Node {
    value: Box<i32>,
    children: Vec<Rc<RefCell<Node>>>,
}

fn main() {
    let leaf = Rc::new(RefCell::new(Node {
        value: Box::new(3),
        children: vec![],
    }));
    let branch = Rc::new(RefCell::new(Node {
        value: Box::new(2),
        children: vec![leaf.clone()],
    }));
    let root = Node {
        value: Box::new(1),
        children: vec![branch.clone(), leaf.clone()],
    };
    // root.children[0] ve root.children[1] aynı leaf'e işaret edebilir.
    println!("Root: {}", *root.value);
    println!("Branch: {}", *branch.borrow().value);
    println!("Leaf: {}", *leaf.borrow().value);
}
```
