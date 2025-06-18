## 📘 Section: Unsafe Abstractions and APIs  
### 🔹 Category: Handling concurrency safely with unsafe code  
#### ✅ Answer 810: Handling concurrency safely with unsafe code

Below is an example of a thread-safe counter using `UnsafeCell` and `std::sync::Mutex` with unsafe code.

```rust
use std::cell::UnsafeCell;
use std::sync::{Mutex, Arc};
use std::thread;

pub struct ThreadSafeCounter {
    value: UnsafeCell<i32>,
    lock: Mutex<()>,
}

unsafe impl Send for ThreadSafeCounter {}
unsafe impl Sync for ThreadSafeCounter {}

impl ThreadSafeCounter {
    pub fn new(val: i32) -> Self {
        Self { value: UnsafeCell::new(val), lock: Mutex::new(()) }
    }
    pub fn increment(&self) {
        let _guard = self.lock.lock().unwrap();
        unsafe { *self.value.get() += 1; }
    }
    pub fn get(&self) -> i32 {
        let _guard = self.lock.lock().unwrap();
        unsafe { *self.value.get() }
    }
}

fn main() {
    let counter = Arc::new(ThreadSafeCounter::new(0));
    let mut handles = vec![];
    for _ in 0..10 {
        let c = Arc::clone(&counter);
        handles.push(thread::spawn(move || {
            c.increment();
        }));
    }
    for h in handles { h.join().unwrap(); }
    println!("{}", counter.get());
}
```

Here, Mutex ensures safe access and unsafe provides interior mutability.
