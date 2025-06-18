## 📘 Section: Functions II  
### 🔹 Category: Closures  
#### ✅ Answer 53: Introduction to closures

Closures in Rust are anonymous functions you can store in variables. Here, a closure adds two numbers and is called from `main`.

```rust
fn main() {
    let sum = |a: i32, b: i32| a + b; // Define closure
    let result = sum(5, 7);
    println!("Sum: {}", result); // Output: Sum: 12
}
```
