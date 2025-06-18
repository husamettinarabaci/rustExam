## 📘 Section: Unsafe Code Patterns and Safety
### 🔹 Category: Avoiding Data Races in Unsafe Code
#### ✅ Answer 657: Avoiding data races in unsafe code

A data race occurs when two threads access the same memory concurrently, at least one is a write, and there is no synchronization. Unsafe code can easily introduce data races.

```rust
use std::thread;
use std::sync::Arc;

fn main() {
    let data = Arc::new(std::sync::Mutex::new(0));
    let mut handles = vec![];
    for _ in 0..2 {
        let data = Arc::clone(&data);
        handles.push(thread::spawn(move || {
            let mut num = data.lock().unwrap();
            *num += 1;
        }));
    }
    for h in handles { h.join().unwrap(); }
}
```

Always use synchronization primitives to prevent data races in unsafe code.
