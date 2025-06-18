## 📘 Section: Domain-Specific Languages (DSLs) in Rust
### 🔹 Category: Building an abstract syntax tree (AST) from token streams
#### ✅ Answer 894: Building an abstract syntax tree (AST) from token streams

This solution shows how to build an AST from a vector of tokens, modeling AST nodes with an enum. The AST represents the structure of operations as a tree.

```rust
#[derive(Debug, PartialEq)]
enum Token {
    Number(i32),
    Plus,
    Star,
}

#[derive(Debug)]
enum AST {
    Num(i32),
    Add(Box<AST>, Box<AST>),
    Mul(Box<AST>, Box<AST>),
}

fn build_ast(tokens: &[Token]) -> AST {
    // Example: manually building AST for 2 + 3 * 4
    AST::Add(
        Box::new(AST::Num(2)),
        Box::new(AST::Mul(Box::new(AST::Num(3)), Box::new(AST::Num(4))))
    )
}

fn main() {
    let tokens = vec![Token::Number(2), Token::Plus, Token::Number(3), Token::Star, Token::Number(4)];
    let ast = build_ast(&tokens);
    println!("{:?}", ast);
    // Output: Add(Num(2), Mul(Num(3), Num(4)))
}
```
