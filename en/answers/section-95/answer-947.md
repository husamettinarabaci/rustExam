## 📘 Section: Metaprogramming and Reflection
### 🔹 Category: Building Static Analysis Tools with Rust
#### ✅ Answer 947: Building static analysis tools with Rust

Static analysis inspects code without running it, helping to find bugs, enforce style, and improve safety. Rust's ecosystem provides crates like `syn` for parsing Rust code.

Example: Using `syn` to parse a Rust file and count functions:

```rust
use syn::{File, Item};
use std::fs;

fn main() {
    let code = fs::read_to_string("src/main.rs").unwrap();
    let ast: File = syn::parse_file(&code).unwrap();
    let func_count = ast.items.iter().filter(|item| matches!(item, Item::Fn(_))).count();
    println!("Number of functions: {}", func_count);
}
```

Applications: linting, code metrics, enforcing conventions. Limitations: complex code may be hard to analyze, and some checks require full semantic information (use `rust-analyzer` for advanced cases).
