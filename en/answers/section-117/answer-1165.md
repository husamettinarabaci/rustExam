## 📘 Section: Thread Management and Scheduling  
### 🔹 Category: Thread-Local Storage  
#### ✅ Answer 1165: Using thread-local storage

This example defines a thread-local variable for each thread. Threads read and modify this variable, and each worker prints its own thread-local value.

```rust
use std::thread;
use std::cell::RefCell;

thread_local! {
    static LOCAL: RefCell<u32> = RefCell::new(0);
}

fn main() {
    let mut handles = vec![];
    for i in 0..4 {
        handles.push(thread::spawn(move || {
            LOCAL.with(|val| {
                *val.borrow_mut() = i * 10;
                println!("Thread {}'s local value: {}", i, val.borrow());
            });
        }));
    }
    for handle in handles {
        handle.join().unwrap();
    }
}
```
