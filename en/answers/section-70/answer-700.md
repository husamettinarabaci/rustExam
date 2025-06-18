## 📘 Section: Full-Stack Rust Integration  
### 🔹 Category: Writing documentation and API specifications  
#### ✅ Answer 700: Writing documentation and API specifications

Documentation in Rust is written using doc comments (`///`). Tools like `cargo doc` generate HTML documentation. For APIs, OpenAPI specs can be generated with crates like `utoipa`.

Example:
```rust
/// Adds two numbers.
///
/// # Arguments
/// * `a` - First number
/// * `b` - Second number
fn add(a: i32, b: i32) -> i32 {
    a + b
}
```
Run `cargo doc --open` to view generated docs. Use OpenAPI crates for API specs.
