## 📘 Section: Modules and Visibility  
### 🔹 Category: Library-Style Crate Structure  
#### ✅ Answer 370: Creating a library-style crate structure

A library-style crate in Rust uses `src/lib.rs` as its entry point, where you declare and expose your public modules. Each module can be placed in its own file for clarity and maintainability. This structure is ideal for reusable libraries and clean API design.

Example directory structure:

```
my_lib/
  Cargo.toml
  src/
    lib.rs
    math.rs
    utils.rs
```

Example code:

```rust
// src/lib.rs
pub mod math;
pub mod utils;

// src/math.rs
pub fn add(a: i32, b: i32) -> i32 {
    a + b
}

// src/utils.rs
pub fn greet(name: &str) -> String {
    format!("Hello, {}!", name)
}
```

Usage in another crate:

```rust
use my_lib::math::add;
use my_lib::utils::greet;

fn main() {
    println!("{}", add(2, 3));
    println!("{}", greet("Rustacean"));
}
```

This approach keeps your code modular and your public API clear.
