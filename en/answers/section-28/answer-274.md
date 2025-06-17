## 📘 Section: Smart Pointers and Interior Mutability  
### 🔹 Category: Shared Mutable State with Arc<Mutex<T>>  
#### ✅ Answer 274: Using `Arc<Mutex<T>>` for shared mutable state in threads

The combination of `Arc<Mutex<T>>` allows multiple threads to safely share and mutate data. `Arc` provides shared ownership across threads, while `Mutex` ensures that only one thread can access the data at a time. In the example below, a counter is incremented by multiple threads, and the final value is printed after all threads have finished.

```rust
use std::sync::{Arc, Mutex};
use std::thread;

fn main() {
    let counter = Arc::new(Mutex::new(0));
    let mut handles = vec![];

    for _ in 0..10 {
        let counter = Arc::clone(&counter);
        let handle = thread::spawn(move || {
            let mut num = counter.lock().unwrap();
            *num += 1;
        });
        handles.push(handle);
    }

    for handle in handles {
        handle.join().unwrap();
    }

    println!("Result: {}", *counter.lock().unwrap());
}
```
