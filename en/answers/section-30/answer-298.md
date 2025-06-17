## 📘 Section: Modules and Crate Structure  
### 🔹 Category: Organizing Library and Binary Crates Best Practices  
#### ✅ Answer 298: Best practices for organizing library vs binary crates

In Rust, it is best practice to keep shared code in `src/lib.rs` (the library crate) and the application entry point in `src/main.rs` (the binary crate). This allows both the binary and tests to reuse the same code.

**Project structure:**
```
my_project/
├── Cargo.toml
└── src/
    ├── lib.rs
    └── main.rs
```

**src/lib.rs**
```rust
pub fn greet(name: &str) -> String {
    format!("Hello, {}!", name)
}
```

**src/main.rs**
```rust
use my_project::greet;

fn main() {
    println!("{}", greet("Rust"));
}
```

This structure ensures that shared functionality is placed in the library crate, which can be used by both the binary and tests, reducing code duplication and improving testability.
