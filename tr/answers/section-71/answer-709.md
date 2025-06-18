## 📘 Bölüm: İleri Sahiplik: Grafikler, Döngüler ve İçsel Değiştirilebilirlik  
### 🔹 Kategori: İçsel değiştirilebilirlik ile grafik gezintisi simülasyonu  
#### ✅ Cevap 709: İçsel değiştirilebilirlikle grafik gezintisi simülasyonu

Bu örnekte, `Rc<RefCell<T>>` ile basit bir yönlendirilmiş grafik oluşturulmuş ve gezinti sırasında düğümlerin ziyaret edilip edilmediği işaretlenmiştir. İçsel değiştirilebilirlik sayesinde, gezinti sırasında düğümün "ziyaret edildi" alanı güncellenebilir. Döngüsel referanslardan kaçınmak için bağlantılar tek yönlü tutulmuştur.

```rust
use std::cell::RefCell;
use std::rc::Rc;

struct Node {
    value: i32,
    visited: bool,
    neighbors: Vec<Rc<RefCell<Node>>>,
}

fn traverse(node: &Rc<RefCell<Node>>) {
    let mut n = node.borrow_mut();
    if n.visited {
        return;
    }
    n.visited = true;
    println!("Visited: {}", n.value);
    let neighbors = n.neighbors.clone();
    drop(n); // Borrow ends here
    for neighbor in neighbors {
        traverse(&neighbor);
    }
}

fn main() {
    let node1 = Rc::new(RefCell::new(Node { value: 1, visited: false, neighbors: vec![] }));
    let node2 = Rc::new(RefCell::new(Node { value: 2, visited: false, neighbors: vec![] }));
    let node3 = Rc::new(RefCell::new(Node { value: 3, visited: false, neighbors: vec![] }));
    node1.borrow_mut().neighbors.push(node2.clone());
    node2.borrow_mut().neighbors.push(node3.clone());
    traverse(&node1);
}
```
