## 📘 Section: Macro Rules and Declarative Macros  
### 🔹 Category: macro_rules! for repetition and automation  
#### ✅ Answer 681: Writing `macro_rules!` macros for repetitive code

This problem demonstrates how to use `macro_rules!` in Rust to reduce repetitive code. The macro allows you to declare multiple variables at once.

```rust
macro_rules! define_vars {
    ($($name:ident),*) => {
        $(let $name = 0;)*
    };
}

fn main() {
    define_vars!(a, b, c);
    println!("{} {} {}", a, b, c);
}
```
The macro automatically creates and initializes variables with the given names.
