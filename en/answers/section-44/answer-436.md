## 📘 Section: Smart Pointers and Resource Management  
### 🔹 Category: Exclusive Access  
#### ✅ Answer 436: Ensuring exclusive access with `Mutex<T>`

`Mutex<T>` provides exclusive access to data, ensuring only one thread can access the data at a time. This prevents data races in concurrent code.

```rust
use std::sync::{Arc, Mutex};
use std::thread;

fn main() {
    let data = Arc::new(Mutex::new(0));
    let handles: Vec<_> = (0..3).map(|_| {
        let data = Arc::clone(&data);
        thread::spawn(move || {
            let mut num = data.lock().unwrap();
            *num += 1;
        })
    }).collect();
    for h in handles { h.join().unwrap(); }
    println!("Final value: {}", *data.lock().unwrap());
}
```
