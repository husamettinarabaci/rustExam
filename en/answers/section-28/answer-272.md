## 📘 Section: Smart Pointers and Interior Mutability  
### 🔹 Category: RefCell and Interior Mutability  
#### ✅ Answer 272: Creating interior mutability with `RefCell<T>`

`RefCell<T>` enables interior mutability in Rust, allowing you to mutate data even when the struct itself is not declared as mutable. This is useful for cases where compile-time mutability is too restrictive. The `borrow()` method provides immutable access, while `borrow_mut()` provides mutable access at runtime, enforcing borrow rules dynamically. Here is an example using a struct that wraps a vector:

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
