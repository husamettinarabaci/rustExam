## 📘 Section: DSLs for Complex Domains
### 🔹 Category: DSL Design and Usage
#### ✅ Answer 1467: DSL code generation for multiple targets

To generate code for multiple targets from a DSL, convert DSL statements to an intermediate representation (AST), then use separate code generators for each target. Pay attention to syntax and semantic differences for each target.

```rust
// Example DSL: add(2, 3)
// Rust output: 2 + 3
// Python output: 2 + 3

fn generate_rust_code() -> String {
    "2 + 3".to_string()
}
fn generate_python_code() -> String {
    "2 + 3".to_string()
}
```
