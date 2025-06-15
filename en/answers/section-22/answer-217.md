## 📘 Section: Generics I  
### 🔹 Category: Generic type parameters  
#### ✅ Answer 217: Generic type parameters

To use a generic type parameter in a function, specify the type parameter with a trait bound. Here, `display_twice` accepts any type that implements `Display`.

```rust
use std::fmt::Display;

fn display_twice<T: Display>(value: T) {
    print!("{} {}", value, value);
}

fn main() {
    display_twice(42);
    println!("");
    display_twice("hello");
}
```
This function works for any type that implements the `Display` trait, such as integers and string slices.
