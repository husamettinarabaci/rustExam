## 📘 Section: Embedded Domain-Specific Languages (DSLs)
### 🔹 Category: Expression Evaluation
#### ✅ Answer 1264: Evaluating expressions with pattern matching

Pattern matching is ideal for evaluating ASTs. Here is a recursive evaluator for arithmetic expressions:

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
    let expr = Expr::Add(Box::new(Expr::Lit(2)), Box::new(Expr::Mul(Box::new(Expr::Lit(3)), Box::new(Expr::Lit(4)))));
    println!("Result: {}", eval(&expr));
}
```

This prints the result of `2 + 3 * 4`.
