## 📘 Section: Thread Management and Scheduling  
### 🔹 Category: Handling Thread Panics Safely  
#### ✅ Answer 1166: Handling thread panics safely

This example starts several threads, some of which panic. The main thread checks the result of each thread's `join` and prints a special message for threads that panicked.

```rust
use std::thread;

fn main() {
    let mut handles = vec![];
    for i in 0..4 {
        handles.push(thread::spawn(move || {
            if i % 2 == 0 {
                panic!("Thread {} panicked!", i);
            } else {
                println!("Thread {} completed successfully.", i);
            }
        }));
    }
    for (i, handle) in handles.into_iter().enumerate() {
        match handle.join() {
            Ok(_) => println!("Thread {} finished successfully.", i),
            Err(_) => println!("Thread {} panicked and was caught!", i),
        }
    }
}
```
