## 📘 Section: Modules I  
### 🔹 Category: Module Documentation  
#### ✅ Answer 128: Module documentation

You can document modules and their items using triple slash `///` comments. These comments are used by Rust's documentation generator. Use `cargo doc --open` to build and view the docs.

```rust
/// Math utilities module
mod math {
    /// Adds two numbers and returns the result.
    pub fn add(a: i32, b: i32) -> i32 {
        a + b
    }
}

fn main() {
    let result = math::add(2, 3);
    println!("Sum: {}", result);
}
```

To generate and view the documentation, run:

```
cargo doc --open
```
