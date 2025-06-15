## 📘 Section: Closures and Ownership
### 🔹 Category: Closures and Recursion
#### ✅ Answer 250: Closures and recursion

In Rust, closures cannot directly call themselves (no named self-reference). To achieve recursion, you can use a function pointer or pass the closure as a parameter. Here is a workaround for a recursive factorial closure:

```rust
fn main() {
    fn factorial(f: &dyn Fn(&dyn Fn(&dyn Fn(i32) -> i32, i32) -> i32, i32) -> i32, n: i32) -> i32 {
        if n == 0 { 1 } else { n * f(f, n - 1) }
    }
    let result = factorial(&factorial, 5);
    println!("Factorial: {}", result); // Output: Factorial: 120
}
```

**Limitation:**
Closures in Rust cannot refer to themselves by name. The workaround is to use a helper function or pass the closure as an argument, as shown above.
