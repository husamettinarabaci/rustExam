## 📘 Section: Compile-Time Engines and Metaprogramming
### 🔹 Category: Type-Safe Embedded DSLs
#### ✅ Answer 1280: Designing type-safe embedded DSLs

Traits and generics can be used to build type-safe DSLs. Example:

```rust
trait Expr {
    fn eval(&self) -> i32;
}

struct Lit(i32);
impl Expr for Lit {
    fn eval(&self) -> i32 { self.0 }
}

struct Add<A: Expr, B: Expr>(A, B);
impl<A: Expr, B: Expr> Expr for Add<A, B> {
    fn eval(&self) -> i32 { self.0.eval() + self.1.eval() }
}

fn main() {
    let expr = Add(Lit(2), Lit(3));
    println!("{}", expr.eval());
}
```

The type system ensures only valid expressions are constructed.
