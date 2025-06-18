## 📘 Section: Procedural Macros and Code Generation  
### 🔹 Category: Embedding a typed mini-language using traits and generics  
#### ✅ Answer 620: Embedding a typed mini-language using traits and generics

This example defines a trait for DSL expressions and implements it for different types, ensuring type safety.

```rust
trait Eval {
    type Output;
    fn eval(&self) -> Self::Output;
}

struct Add<T: Eval, U: Eval> {
    left: T,
    right: U,
}

impl<T: Eval, U: Eval> Eval for Add<T, U> {
    type Output = i32;
    fn eval(&self) -> i32 {
        self.left.eval() + self.right.eval()
    }
}

impl Eval for i32 {
    type Output = i32;
    fn eval(&self) -> i32 { *self }
}

fn main() {
    let expr = Add { left: 2, right: 3 };
    println!("{}", expr.eval()); // 5
}
```
