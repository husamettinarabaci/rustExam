## 📘 Section: Embedded Domain-Specific Languages (DSLs)
### 🔹 Category: Error Handling in DSLs
#### ✅ Answer 1269: Error handling and diagnostics in DSLs

To add error handling, return `Result` from your evaluator and handle errors like undefined variables:

```rust
use std::collections::HashMap;

enum Expr {
    Lit(i32),
    Var(String),
    Add(Box<Expr>, Box<Expr>),
}

fn eval(expr: &Expr, env: &HashMap<String, i32>) -> Result<i32, String> {
    match expr {
        Expr::Lit(n) => Ok(*n),
        Expr::Var(name) => env.get(name).cloned().ok_or(format!("Undefined variable: {}", name)),
        Expr::Add(a, b) => Ok(eval(a, env)? + eval(b, env)?),
    }
}

fn main() {
    let env = HashMap::new();
    let expr = Expr::Add(Box::new(Expr::Var("x".to_string())), Box::new(Expr::Lit(3)));
    match eval(&expr, &env) {
        Ok(val) => println!("Result: {}", val),
        Err(e) => println!("Error: {}", e),
    }
}
```

This prints an error if `x` is undefined.
