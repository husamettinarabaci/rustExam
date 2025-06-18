## 📘 Section: DSL Optimization and Code Generation  
### 🔹 Category: Inline expansion of DSL expressions  
#### ✅ Answer 1361: Inline expansion of DSL expressions

In Rust, macros can be used for inline expansion of DSL expressions. Macros expand code at compile time, eliminating function call overhead and improving performance.

```rust
macro_rules! dsl_add {
    ($a:expr, $b:expr) => {
        $a + $b
    };
}

fn main() {
    let result = dsl_add!(2, 3);
    println!("Result: {}", result);
}
```
Here, the `dsl_add!` macro expands directly to the addition operation at the call site.
