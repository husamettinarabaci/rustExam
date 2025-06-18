## 📘 Section: Procedural Macros and Code Generation  
### 🔹 Category: Implementing macros to define embedded DSL syntax  
#### ✅ Answer 615: Implementing macros to define embedded DSL syntax

This example defines a `macro_rules!` macro that translates DSL expressions into Rust function calls. The macro improves DSL readability.

```rust
macro_rules! dsl {
    (add($a:expr, $b:expr)) => { $a + $b };
    (mul($a:expr, $b:expr)) => { $a * $b };
}

fn main() {
    let result = dsl!(add(1, mul(2, 3)));
    println!("{}", result);
}
```
