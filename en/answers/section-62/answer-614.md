## 📘 Section: Procedural Macros and Code Generation  
### 🔹 Category: Evaluating expressions with pattern-matched execution  
#### ✅ Answer 614: Evaluating expressions with pattern-matched execution

This solution evaluates an enum-based AST by traversing it with pattern matching. Each variant is handled accordingly.

```rust
#[derive(Debug)]
enum Expr {
    Number(i32),
    Add(Box<Expr>, Box<Expr>),
    Mul(Box<Expr>, Box<Expr>),
}

fn eval(expr: &Expr) -> i32 {
    match expr {
        Expr::Number(n) => *n,
        Expr::Add(a, b) => eval(a) + eval(b),
        Expr::Mul(a, b) => eval(a) * eval(b),
    }
}

fn main() {
    let ast = Expr::Add(
        Box::new(Expr::Number(1)),
        Box::new(Expr::Mul(
            Box::new(Expr::Number(2)),
            Box::new(Expr::Number(3)),
        )),
    );
    println!("{}", eval(&ast));
}
```
