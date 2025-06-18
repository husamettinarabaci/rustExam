## 📘 Section: Domain-Specific Languages (DSLs) in Rust
### 🔹 Category: Evaluating expressions with pattern-matched execution
#### ✅ Answer 895: Evaluating expressions with pattern-matched execution

This solution provides a function that recursively evaluates arithmetic expressions by pattern matching on the AST.

```rust
#[derive(Debug)]
enum AST {
    Num(i32),
    Add(Box<AST>, Box<AST>),
    Mul(Box<AST>, Box<AST>),
}

fn eval(ast: &AST) -> i32 {
    match ast {
        AST::Num(n) => *n,
        AST::Add(a, b) => eval(a) + eval(b),
        AST::Mul(a, b) => eval(a) * eval(b),
    }
}

fn main() {
    let ast = AST::Add(
        Box::new(AST::Num(2)),
        Box::new(AST::Mul(Box::new(AST::Num(3)), Box::new(AST::Num(4))))
    );
    println!("Result: {}", eval(&ast)); // Result: 14
}
```
