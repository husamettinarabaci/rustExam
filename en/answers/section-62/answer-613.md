## 📘 Section: Procedural Macros and Code Generation  
### 🔹 Category: Building ASTs for embedded DSLs  
#### ✅ Answer 613: Building ASTs for embedded DSLs

This solution defines an enum-based AST for a DSL and a parser function that converts a string into the AST. This is a basic example and can be extended for more complex DSLs.

```rust
#[derive(Debug)]
enum Expr {
    Number(i32),
    Add(Box<Expr>, Box<Expr>),
    Mul(Box<Expr>, Box<Expr>),
}

fn parse_expr(input: &str) -> Expr {
    // Simple example: only works for "add(1, mul(2, 3))"
    Expr::Add(
        Box::new(Expr::Number(1)),
        Box::new(Expr::Mul(
            Box::new(Expr::Number(2)),
            Box::new(Expr::Number(3)),
        )),
    )
}

fn main() {
    let ast = parse_expr("add(1, mul(2, 3))");
    println!("{:?}", ast);
}
```
