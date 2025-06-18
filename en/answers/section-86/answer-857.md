## 📘 Section: Memory Safety and Static Analysis
### 🔹 Category: Preventing Data Races with Rust’s Concurrency Model
#### ✅ Answer 857: Preventing data races with Rust’s concurrency model

Rust’s ownership and type system prevent multiple threads from accessing the same data simultaneously. Types like `Mutex` and `Arc` enable safe sharing.

```rust
use std::sync::{Arc, Mutex};
use std::thread;

fn main() {
    let data = Arc::new(Mutex::new(0));
    let mut handles = vec![];
    for _ in 0..10 {
        let data = Arc::clone(&data);
        handles.push(thread::spawn(move || {
            let mut num = data.lock().unwrap();
            *num += 1;
        }));
    }
    for h in handles { h.join().unwrap(); }
    println!("Result: {}", *data.lock().unwrap());
}
```

The compiler’s type system prevents data races at compile time.
