## 📘 Section: Embedded Domain-Specific Languages (DSLs)
### 🔹 Category: Internal DSL Design
#### ✅ Answer 1261: Designing internal DSLs with Rust macros

Rust's `macro_rules!` system allows you to create internal DSLs by defining custom syntax that expands to valid Rust code. Here, we define a macro for arithmetic expressions.

```rust
macro_rules! expr {
    ($e:expr) => {
        $e
    };
}

fn main() {
    let result = expr!(1 + 2 * 3);
    println!("Result: {}", result);
}
```

This macro simply passes the expression through, but you can extend it for more complex DSLs.
