## 📘 Section: Smart Pointers and Resource Management  
### 🔹 Category: RefCell vs Mutex  
#### ✅ Answer 437: Comparing `RefCell` and `Mutex` in practice

`RefCell<T>` provides interior mutability for single-threaded code, while `Mutex<T>` provides thread-safe interior mutability for multi-threaded code. Use `RefCell` when you only need runtime-checked mutability in one thread, and `Mutex` when sharing data across threads.

```rust
// Single-threaded: RefCell
use std::cell::RefCell;
let data = RefCell::new(1);
*data.borrow_mut() += 1;

// Multi-threaded: Mutex
use std::sync::{Arc, Mutex};
let data = Arc::new(Mutex::new(1));
{
    let mut num = data.lock().unwrap();
    *num += 1;
}
```
