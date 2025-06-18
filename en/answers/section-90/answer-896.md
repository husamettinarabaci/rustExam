## 📘 Section: Domain-Specific Languages (DSLs) in Rust
### 🔹 Category: Implementing macros to define embedded DSL syntax
#### ✅ Answer 896: Implementing macros to define embedded DSL syntax

This solution defines a Rust macro (`macro_rules!`) to easily construct arithmetic expressions as AST nodes for an embedded DSL.

```rust
#[derive(Debug)]
enum AST {
    Num(i32),
    Add(Box<AST>, Box<AST>),
    Mul(Box<AST>, Box<AST>),
}

macro_rules! expr {
    ($a:expr + $b:expr) => {
        AST::Add(Box::new($a), Box::new($b))
    };
    ($a:expr * $b:expr) => {
        AST::Mul(Box::new($a), Box::new($b))
    };
    ($n:literal) => {
        AST::Num($n)
    };
}

fn main() {
    let ast = expr!(expr!(2) + expr!(expr!(3) * expr!(4)));
    println!("{:?}", ast);
    // Output: Add(Num(2), Mul(Num(3), Num(4)))
}
```
