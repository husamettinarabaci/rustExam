## 📘 Section: Embedded DSLs: Parsing and Compilation
### 🔹 Category: Compiling DSLs to Intermediate Representations
#### ✅ Answer 1316: Compiling DSLs to intermediate representations

This example shows a basic function that builds a simple AST (abstract syntax tree) from a DSL expression.

```rust
#[derive(Debug)]
enum Expr {
    Number(i32),
    Add(Box<Expr>, Box<Expr>),
}

fn parse_ast(tokens: &[&str]) -> Option<Expr> {
    if tokens.len() == 3 && tokens[0] == "add" {
        let left = Expr::Number(tokens[1].parse().ok()?);
        let right = Expr::Number(tokens[2].parse().ok()?);
        Some(Expr::Add(Box::new(left), Box::new(right)))
    } else {
        None
    }
}

fn main() {
    let tokens = vec!["add", "1", "2"];
    let ast = parse_ast(&tokens);
    println!("{:?}", ast);
}
```
