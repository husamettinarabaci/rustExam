## 📘 Section: Generics I  
### 🔹 Category: Type Inference with Generics  
#### ✅ Answer 215: Type inference with generics

Rust can often infer generic type parameters from context, so you don't need to specify them explicitly. In this example, the function `wrap_in_option` is generic over `T` and returns an `Option<T>`. When you call it, Rust infers the type from the argument.

```rust
fn wrap_in_option<T>(value: T) -> Option<T> {
    Some(value)
}

fn main() {
    let a = wrap_in_option(42);        // T is i32
    let b = wrap_in_option("hello");  // T is &str
    println!("{:?}", a);
    println!("{:?}", b);
}
```
