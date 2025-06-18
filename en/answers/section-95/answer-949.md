## 📘 Section: Metaprogramming and Reflection
### 🔹 Category: Runtime Type Inspection with Any Trait
#### ✅ Answer 949: Runtime type inspection with `Any` trait

The `Any` trait in Rust allows for limited runtime type inspection and downcasting. It is implemented for all `'static` types and provides methods to check a value's type or attempt to downcast.

Example:

```rust
use std::any::Any;

fn print_type(val: &dyn Any) {
    if val.is::<i32>() {
        println!("It's an i32!");
    } else if val.is::<String>() {
        println!("It's a String!");
    }
}

fn main() {
    let x = 42;
    let y = "hello".to_string();
    print_type(&x);
    print_type(&y);
}
```

Limitations: Only works for `'static` types, cannot inspect fields or methods, and is not a substitute for full reflection. Use cases: heterogeneous collections, plugin systems, or dynamic dispatch.
