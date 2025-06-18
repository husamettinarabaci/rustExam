## 📘 Section: Embedded Domain-Specific Languages (DSLs)
### 🔹 Category: AST Construction
#### ✅ Answer 1263: Building ASTs for embedded DSLs

You can represent a DSL as an AST using Rust enums and structs. Here is an example for arithmetic expressions:

```rust
enum Expr {
    Lit(i32),
    Add(Box<Expr>, Box<Expr>),
    Mul(Box<Expr>, Box<Expr>),
}

fn eval(expr: &Expr) -> i32 {
    match expr {
        Expr::Lit(n) => *n,
        Expr::Add(a, b) => eval(a) + eval(b),
        Expr::Mul(a, b) => eval(a) * eval(b),
    }
}

fn main() {
    let expr = Expr::Add(
        Box::new(Expr::Lit(1)),
        Box::new(Expr::Mul(Box::new(Expr::Lit(2)), Box::new(Expr::Lit(3))))
    );
    println!("Result: {}", eval(&expr));
}
```

This models and evaluates the expression `1 + 2 * 3`.
