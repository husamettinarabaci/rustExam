## 📘 Section: Compile-Time Engines and Metaprogramming
### 🔹 Category: Const Functions
#### ✅ Answer 1271: Using `const fn` for compile-time computations

Rust's `const fn` allows computations to be performed at compile time. Here is a factorial example:

```rust
const fn factorial(n: u32) -> u32 {
    if n == 0 { 1 } else { n * factorial(n - 1) }
}

const FACT5: u32 = factorial(5);

fn main() {
    println!("Factorial of 5 is {}", FACT5);
}
```

The value of `FACT5` is computed at compile time.
