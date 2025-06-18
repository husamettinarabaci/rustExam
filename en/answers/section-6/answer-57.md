## 📘 Section: Functions II  
### 🔹 Category: Trait Bounds in Functions  
#### ✅ Answer 57: Function with trait bound parameter

Trait bounds allow functions to accept only types that implement a specific trait. Here, the function prints any value that implements the `Display` trait.

```rust
use std::fmt::Display;

fn print_display<T: Display>(item: T) {
    println!("Value: {}", item);
}

fn main() {
    print_display(123);         // integer
    print_display("Rustacean"); // string slice
}
```
