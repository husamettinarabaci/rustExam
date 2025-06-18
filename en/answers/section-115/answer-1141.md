## 📘 Section: Testing and Debugging Concurrent Code  
### 🔹 Category: Writing Tests for Concurrent Scenarios  
#### ✅ Answer 1141: Writing tests for concurrent scenarios

This example shows a Rust unit test where multiple threads increment a shared counter concurrently. The counter is wrapped in `Arc<Mutex<T>>` to ensure safe access. The test verifies the final value.

```rust
#[test]
fn concurrent_counter() {
    use std::sync::{Arc, Mutex};
    use std::thread;

    let counter = Arc::new(Mutex::new(0));
    let mut handles = vec![];
    for _ in 0..10 {
        let counter = Arc::clone(&counter);
        handles.push(thread::spawn(move || {
            let mut num = counter.lock().unwrap();
            *num += 1;
        }));
    }
    for handle in handles {
        handle.join().unwrap();
    }
    assert_eq!(*counter.lock().unwrap(), 10);
}
```
