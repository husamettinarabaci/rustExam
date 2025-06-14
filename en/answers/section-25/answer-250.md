## 📘 Section: Closures and Ownership  
### 🔹 Category: Closures and Recursion  
#### ✅ Answer 250: Closures and recursion

Closures cannot refer to themselves directly, but recursion is possible using a fixed-point combinator or by passing the closure as a parameter.

```rust
fn factorial(n: u32) -> u32 {
    (|f, n| if n == 0 { 1 } else { n * f(f, n - 1) })(|f, n| if n == 0 { 1 } else { n * f(f, n - 1) }, n)
}

println!("{}", factorial(5));
```

This technique enables recursion with closures.
