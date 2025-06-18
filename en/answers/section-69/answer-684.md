## 📘 Section: Macro Rules and Declarative Macros  
### 🔹 Category: Implementing DSLs with declarative macros  
#### ✅ Answer 684: Implementing DSLs with declarative macros

This problem demonstrates how to create a mini domain-specific language (DSL) in Rust using a declarative macro. The macro provides a custom syntax for operations.

```rust
macro_rules! calc {
    (add $a:expr, $b:expr) => {
        $a + $b
    };
    (mul $a:expr, $b:expr) => {
        $a * $b
    };
}

fn main() {
    let sum = calc!(add 2, 3);
    let product = calc!(mul 4, 5);
    println!("sum: {}, product: {}", sum, product);
}
```
The macro makes addition and multiplication easy with a custom DSL syntax.
