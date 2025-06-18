## 📘 Section: Concurrency Patterns and Idioms  
### 🔹 Category: Async mutexes vs synchronous mutexes  
#### ✅ Answer 1067: Async mutexes vs synchronous mutexes

A synchronous `Mutex` blocks the thread and is used in thread-based concurrency. Async mutexes like `tokio::sync::Mutex` are used in async environments and are locked with `await`.

Synchronous example:
```rust
use std::sync::{Arc, Mutex};
use std::thread;

fn main() {
    let data = Arc::new(Mutex::new(0));
    let mut handles = vec![];
    for _ in 0..4 {
        let data = Arc::clone(&data);
        handles.push(thread::spawn(move || {
            let mut d = data.lock().unwrap();
            *d += 1;
        }));
    }
    for h in handles { h.join().unwrap(); }
    println!("Result: {}", *data.lock().unwrap());
}
```
Async example:
```rust
use tokio::sync::Mutex;
use std::sync::Arc;

#[tokio::main]
async fn main() {
    let data = Arc::new(Mutex::new(0));
    let mut handles = vec![];
    for _ in 0..4 {
        let data = Arc::clone(&data);
        handles.push(tokio::spawn(async move {
            let mut d = data.lock().await;
            *d += 1;
        }));
    }
    for h in handles { h.await.unwrap(); }
    println!("Result: {}", *data.lock().await);
}
```
In short: use synchronous mutexes for thread-based code, async mutexes for async code.
