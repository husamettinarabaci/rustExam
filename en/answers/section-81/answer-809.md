## 📘 Section: Unsafe Abstractions and APIs  
### 🔹 Category: Using `UnsafeCell` for interior mutability  
#### ✅ Answer 809: Using `UnsafeCell` for interior mutability

Below is a simple counter example that provides interior mutability using `UnsafeCell`. The API is safe.

```rust
use std::cell::UnsafeCell;

pub struct MyCounter {
    value: UnsafeCell<i32>,
}

impl MyCounter {
    pub fn new(val: i32) -> Self {
        Self { value: UnsafeCell::new(val) }
    }
    pub fn increment(&self) {
        unsafe { *self.value.get() += 1; }
    }
    pub fn get(&self) -> i32 {
        unsafe { *self.value.get() }
    }
}

fn main() {
    let counter = MyCounter::new(0);
    counter.increment();
    println!("{}", counter.get());
}
```

Note: `MyCounter` is not thread-safe and should only be used in a single thread.
