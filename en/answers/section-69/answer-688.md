## 📘 Section: Macro Rules and Declarative Macros  
### 🔹 Category: Exporting macros from crates  
#### ✅ Answer 688: Exporting macros from crates

This problem demonstrates how to export a macro for use in another crate using the `#[macro_export]` attribute.

```rust
// my_macros crate
#[macro_export]
macro_rules! say_hello {
    () => {
        println!("Hello from macro!");
    };
}
```
To use in another crate:
```rust
// main crate
your_crate::say_hello!();
```
`#[macro_export]` makes the macro available outside the crate.
