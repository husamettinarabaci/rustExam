## 📘 Section: Compile-Time Reflection and Introspection
### 🔹 Category: Compile-Time Reflection
#### ✅ Answer 1471: Limitations and capabilities of Rust reflection

Rust's reflection capabilities are limited compared to languages like Java or C#. Rust does not support full runtime reflection due to its focus on zero-cost abstractions and safety. However, some type information can be accessed at compile time or runtime using traits and macros. For example, `std::any::type_name` provides the type name at runtime, and procedural macros can generate code based on type structure at compile time.

```rust
use std::any::type_name;

fn print_type_of<T>(_: &T) {
    println!("Type: {}", type_name::<T>());
}

fn main() {
    let x = 42;
    print_type_of(&x); // Type: i32
}
```
