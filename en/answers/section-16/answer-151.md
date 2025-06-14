## 📘 Section: Advanced Traits and Generics  
### 🔹 Category: Trait Bounds and Where Clauses  
#### ✅ Answer 151: Using trait bounds in function signatures

This function demonstrates how to use multiple trait bounds in a generic function. By specifying both `Display` and `Debug`, the function can print the value in both standard and debug formats.

```rust
use std::fmt::{Display, Debug};

fn print_info<T: Display + Debug>(value: T) {
    println!("Display: {}", value);
    println!("Debug: {:?}", value);
}
```
