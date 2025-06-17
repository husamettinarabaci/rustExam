## 📘 Section: Modules and Crate Structure  
### 🔹 Category: Documenting Modules and Public APIs  
#### ✅ Answer 299: Documenting modules and public APIs

Writing documentation for modules and public APIs in Rust is done using special comments. Use `///` for documenting items like functions, structs, and enums, and `//!` for module-level or crate-level documentation. Documentation is generated with `cargo doc` and can be viewed in a browser.

```rust
//! This is a module-level documentation example.

/// Adds two numbers together.
///
/// Returns the sum of `a` and `b`.
///
/// # Example
/// ```
/// let result = my_crate::add(2, 3);
/// assert_eq!(result, 5);
/// ```
pub fn add(a: i32, b: i32) -> i32 {
    a + b
}
```

- Run `cargo doc --open` to generate and view the documentation.
- Use `///` for items, and `//!` for module or crate-level docs.
