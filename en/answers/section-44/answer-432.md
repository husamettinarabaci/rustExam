## 📘 Section: Smart Pointers and Resource Management  
### 🔹 Category: Reference Counting  
#### ✅ Answer 432: Using `Rc<T>` for reference-counted ownership

`Rc<T>` is a smart pointer for shared ownership in single-threaded Rust. It keeps a reference count and deallocates the data when the last owner goes out of scope. Use `Rc<T>` when you need multiple parts of your program to own the same data.

```rust
use std::rc::Rc;

fn main() {
    let data = Rc::new(5);
    let a = Rc::clone(&data);
    let b = Rc::clone(&data);
    println!("{} {} {}", data, a, b);
}
```
