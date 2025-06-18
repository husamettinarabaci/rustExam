## 📘 Section: Domain-Specific Languages (DSLs) in Rust  
### 🔹 Category: Designing an internal DSL using enums and pattern matching  
#### ✅ Answer 891: Designing an internal DSL using enums and pattern matching

You can build an internal DSL in Rust using enums and pattern matching. For example, a simple arithmetic DSL:

```rust
enum Expr {
    Add(i32, i32),
    Sub(i32, i32),
    Mul(i32, i32),
}

fn eval(expr: Expr) -> i32 {
    match expr {
        Expr::Add(a, b) => a + b,
        Expr::Sub(a, b) => a - b,
        Expr::Mul(a, b) => a * b,
    }
}

fn main() {
    let e = Expr::Add(2, 3);
    println!("Result: {}", eval(e));
}
```

Here, the DSL is defined with an enum and interpreted using pattern matching.
