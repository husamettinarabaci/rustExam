## 📘 Section: Unsafe Rust and Advanced Features  
### 🔹 Category: Pinning  
#### ✅ Answer 199: Using Pin for self-referential types

`Pin` prevents a value from being moved in memory, which is necessary for self-referential types. Pinning is done with `Pin<Box<T>>`.

```rust
use std::pin::Pin;

fn main() {
    let mut boxed = Box::new(5);
    let pinned = Pin::new(&mut boxed);
    println!("Pinned value: {}", pinned);
}
```
