## 📚 Section: Generics  
### 🔹 Category: Trait Bounds  
#### ✅ Answer 74: Using trait bounds with generics

**Explanation:**
Trait bounds restrict generic types to those that implement certain traits.

```rust
use std::fmt::Display;

fn print_value<T: Display>(value: T) {
    println!("{}", value);
}

fn main() {
    print_value(123);
    print_value("abc");
}
```
