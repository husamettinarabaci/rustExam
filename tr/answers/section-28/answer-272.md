## 📘 Bölüm: Akıllı İşaretçiler ve İçsel Değiştirilebilirlik  
### 🔹 Kategori: RefCell ve İçsel Değiştirilebilirlik  
#### ✅ Cevap 272: `RefCell<T>` ile içsel değiştirilebilirlik oluşturma

`RefCell<T>`, Rust'ta çalışma zamanında değiştirilebilirlik sağlar. Bu, özellikle bir yapının alanında derleme zamanında değiştirilemez olan verileri, çalışma zamanında güvenli şekilde değiştirmek için kullanılır. `borrow()` ile veriye salt okunur, `borrow_mut()` ile ise yazılabilir erişim sağlanır. Aşağıdaki örnekte, bir vektörü saran bir yapıda `RefCell` kullanımı gösterilmiştir.

```rust
use std::cell::RefCell;

struct MyVec {
    data: RefCell<Vec<i32>>,
}

impl MyVec {
    fn add(&self, value: i32) {
        self.data.borrow_mut().push(value);
    }
    fn print(&self) {
        for v in self.data.borrow().iter() {
            println!("{}", v);
        }
    }
}

fn main() {
    let my_vec = MyVec { data: RefCell::new(vec![1, 2, 3]) };
    my_vec.add(4);
    my_vec.print();
}
```
