## 📘 Section: Embedded Domain-Specific Languages (DSLs)
### 🔹 Category: DSL Performance Optimization
#### ✅ Answer 1270: Optimizing DSL execution performance

One common optimization is constant folding, which simplifies the AST by evaluating constant sub-expressions at compile time:

```rust
enum Expr {
    Lit(i32),
    Add(Box<Expr>, Box<Expr>),
    Mul(Box<Expr>, Box<Expr>),
}

fn fold_constants(expr: Expr) -> Expr {
    match expr {
        Expr::Add(a, b) => {
            let a = fold_constants(*a);
            let b = fold_constants(*b);
            match (&a, &b) {
                (Expr::Lit(x), Expr::Lit(y)) => Expr::Lit(x + y),
                _ => Expr::Add(Box::new(a), Box::new(b)),
            }
        }
        Expr::Mul(a, b) => {
            let a = fold_constants(*a);
            let b = fold_constants(*b);
            match (&a, &b) {
                (Expr::Lit(x), Expr::Lit(y)) => Expr::Lit(x * y),
                _ => Expr::Mul(Box::new(a), Box::new(b)),
            }
        }
        e => e,
    }
}
```

This reduces runtime computation by precomputing constant expressions.
