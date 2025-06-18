## 📘 Section: Domain-Specific Languages (DSLs) in Rust
### 🔹 Category: Embedding a typed mini-language using traits and generics
#### ✅ Answer 900: Embedding a typed mini-language using traits and generics

This solution creates a type-safe mini DSL using traits and generics. Each operation is defined as a separate trait and implemented for the type.

```rust
trait Add {
    fn add(self, rhs: Self) -> Self;
}

trait Mul {
    fn mul(self, rhs: Self) -> Self;
}

impl Add for i32 {
    fn add(self, rhs: Self) -> Self { self + rhs }
}

impl Mul for i32 {
    fn mul(self, rhs: Self) -> Self { self * rhs }
}

fn eval<T: Add + Mul + Copy>(a: T, b: T, c: T) -> T {
    a.add(b.mul(c))
}

fn main() {
    let result = eval(2, 3, 4); // 2 + 3 * 4
    println!("Result: {}", result); // Result: 14
}
```
