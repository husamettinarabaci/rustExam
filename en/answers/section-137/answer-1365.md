## 📘 Section: DSL Optimization and Code Generation  
### 🔹 Category: Minimizing runtime overhead in DSLs  
#### ✅ Answer 1365: Minimizing runtime overhead in DSLs

To reduce runtime overhead, use constant data structures and `const fn` functions in Rust. Whenever possible, resolve DSL expressions at compile time.

```rust
const fn add(a: i32, b: i32) -> i32 {
    a + b
}

const RESULT: i32 = add(2, 3);

fn main() {
    println!("Result: {}", RESULT);
}
```
Here, the addition is resolved at compile time, eliminating runtime cost.
