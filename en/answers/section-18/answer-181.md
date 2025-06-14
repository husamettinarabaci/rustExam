## 📘 Section: Concurrency and Multithreading  
### 🔹 Category: Thread Spawning  
#### ✅ Answer 181: Creating and joining threads in Rust

This example shows how to spawn a thread and wait for it to finish using `join`.

```rust
use std::thread;

fn main() {
    let handle = thread::spawn(|| {
        println!("Hello from the spawned thread!");
    });
    handle.join().unwrap();
}
```
