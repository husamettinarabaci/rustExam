## 📘 Section: Smart Pointers and Resource Management  
### 🔹 Category: Custom Smart Pointers  
#### ✅ Answer 439: Creating custom smart pointer wrappers

You can create a custom smart pointer by implementing the `Deref` and `Drop` traits. This allows your type to behave like a pointer and run custom code when dropped.

```rust
use std::ops::Deref;

struct MyBox<T>(T);

impl<T> Deref for MyBox<T> {
    type Target = T;
    fn deref(&self) -> &Self::Target {
        &self.0
    }
}

impl<T> Drop for MyBox<T> {
    fn drop(&mut self) {
        println!("Dropping MyBox!");
    }
}

fn main() {
    let x = MyBox(5);
    println!("{}", *x);
}
```
