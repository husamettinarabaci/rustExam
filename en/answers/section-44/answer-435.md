## 📘 Section: Smart Pointers and Resource Management  
### 🔹 Category: Thread-Safe Reference Counting  
#### ✅ Answer 435: Using `Arc<T>` for thread-safe reference counting

`Arc<T>` is an atomic reference-counted smart pointer for sharing ownership across threads. Unlike `Rc<T>`, `Arc<T>` is safe to use in multithreaded contexts.

```rust
use std::sync::Arc;
use std::thread;

fn main() {
    let data = Arc::new(5);
    let handles: Vec<_> = (0..3).map(|_| {
        let data = Arc::clone(&data);
        thread::spawn(move || {
            println!("{}", data);
        })
    }).collect();
    for h in handles { h.join().unwrap(); }
}
```
