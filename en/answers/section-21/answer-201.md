## 📘 Section: Macros and Metaprogramming  
### 🔹 Category: Macro Basics  
#### ✅ Answer 201: Defining a simple macro in Rust

This example shows how to define and use a simple macro in Rust.

```rust
macro_rules! say_hello {
    () => {
        println!("Hello, Rust!");
    };
}

fn main() {
    say_hello!();
}
```
