## 📘 Section: Synchronization Primitives Deep Dive
### 🔹 Category: Testing synchronization correctness
#### ✅ Answer 1139: Testing synchronization correctness

The correctness of a synchronization primitive is checked with unit tests. The test ensures no data race occurs.

```rust
#[cfg(test)]
mod tests {
    use super::*;
    use std::sync::{Arc, Mutex};
    use std::thread;

    #[test]
    fn test_mutex() {
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
        assert_eq!(*data.lock().unwrap(), 10);
    }
}
```
This test shows that the mutex works correctly.
