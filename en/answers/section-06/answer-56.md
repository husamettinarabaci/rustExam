## 📘 Section: Functions II  
### 🔹 Category: Generics in Functions  
#### ✅ Answer 56: Function with generic parameter

You can define generic functions in Rust using angle brackets and trait bounds. Here, the function prints any value that implements the `Debug` trait.

```rust
use std::fmt::Debug;

fn print_debug<T: Debug>(item: T) {
    println!("Value: {:?}", item);
}

fn main() {
    print_debug(42);           // integer
    print_debug("hello");     // string slice
}
```
