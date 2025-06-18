## 📘 Section: Domain-Specific Languages (DSLs) in Rust
### 🔹 Category: Extending the DSL with variables, scopes, and environments
#### ✅ Answer 899: Extending the DSL with variables, scopes, and environments

This solution demonstrates adding variable support and an environment structure to a DSL for variable assignment and usage.

```rust
use std::collections::HashMap;

#[derive(Debug)]
enum Expr {
    Num(i32),
    Var(String),
    Add(Box<Expr>, Box<Expr>),
}

fn eval(expr: &Expr, env: &HashMap<String, i32>) -> i32 {
    match expr {
        Expr::Num(n) => *n,
        Expr::Var(name) => *env.get(name).unwrap(),
        Expr::Add(a, b) => eval(a, env) + eval(b, env),
    }
}

fn main() {
    let mut env = HashMap::new();
    env.insert("x".to_string(), 5);
    let expr = Expr::Add(Box::new(Expr::Var("x".to_string())), Box::new(Expr::Num(3)));
    println!("Result: {}", eval(&expr, &env)); // Result: 8
}
```
