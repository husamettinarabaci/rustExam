## 📘 Section: Project Design and Refactoring  
### 🔹 Category: Documenting Public APIs and Module Boundaries  
#### ✅ Answer 498: Documenting public APIs and module boundaries

In Rust, documentation for modules and functions is written using `///`. These comments can be turned into HTML documentation with `cargo doc`, making it easier for users to understand the API.

```rust
/// Module for math operations
pub mod math {
    /// Adds two numbers
    pub fn add(a: i32, b: i32) -> i32 {
        a + b
    }
}

fn main() {
    let sum = math::add(2, 3);
    println!("Sum: {}", sum);
}
```
