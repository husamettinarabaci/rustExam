## 📘 Section: Compile-Time Programming Patterns  
### 🔹 Category: Advanced const fn Usage and Limitations  
#### ✅ Answer 1321: Advanced `const fn` usage and limitations

`const fn` functions allow computations at compile time, but only a subset of Rust's features are available. For example, only certain control flow and operations are allowed, and not all standard library functions can be used.

```rust
const fn factorial(n: u32) -> u32 {
    if n == 0 { 1 } else { n * factorial(n - 1) }
}

const FACT5: u32 = factorial(5);

fn main() {
    println!("5! = {}", FACT5);
}
```
In this example, `factorial` is evaluated at compile time. Only constant expressions and limited control flow are allowed in `const fn`.
