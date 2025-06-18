## 📘 Section: Embedded Domain-Specific Languages (DSLs)
### 🔹 Category: DSL Extensions
#### ✅ Answer 1265: Extending DSLs with variables and scopes

To support variables and scopes, add a `Var` variant to your AST and use a `HashMap` for the environment:

```rust
use std::collections::HashMap;

enum Expr {
    Lit(i32),
    Var(String),
    Add(Box<Expr>, Box<Expr>),
}

fn eval(expr: &Expr, env: &HashMap<String, i32>) -> i32 {
    match expr {
        Expr::Lit(n) => *n,
        Expr::Var(name) => *env.get(name).unwrap(),
        Expr::Add(a, b) => eval(a, env) + eval(b, env),
    }
}

fn main() {
    let mut env = HashMap::new();
    env.insert("x".to_string(), 5);
    let expr = Expr::Add(Box::new(Expr::Var("x".to_string())), Box::new(Expr::Lit(3)));
    println!("Result: {}", eval(&expr, &env));
}
```

This evaluates `x + 3` with `x = 5`.
