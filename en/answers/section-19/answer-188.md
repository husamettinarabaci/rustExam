## 📘 Section: Concurrency and Multithreading  
### 🔹 Category: Thread Safety  
#### ✅ Answer 188: Ensuring thread safety in custom types

To make a custom struct thread-safe, wrap it in `Arc<Mutex<T>>` so it can be safely shared and mutated across threads.

```rust
use std::sync::{Arc, Mutex};
use std::thread;

struct Data {
    value: i32,
}

fn main() {
    let data = Arc::new(Mutex::new(Data { value: 0 }));
    let mut handles = vec![];
    for _ in 0..5 {
        let data = Arc::clone(&data);
        let handle = thread::spawn(move || {
            let mut d = data.lock().unwrap();
            d.value += 1;
        });
        handles.push(handle);
    }
    for handle in handles {
        handle.join().unwrap();
    }
    println!("Final value: {}", data.lock().unwrap().value);
}
```
