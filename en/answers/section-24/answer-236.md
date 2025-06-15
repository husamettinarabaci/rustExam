## 📘 Section: Closures and Iterator Basics  
### 🔹 Category: Using `fold` and `reduce`  
#### ✅ Answer 236: Using `fold` and `reduce` in Rust

This example demonstrates how to use the iterator methods `fold` and `reduce` in Rust. The program calculates the sum and product of a vector's elements using these methods.

```rust
fn main() {
    let numbers = vec![1, 2, 3, 4, 5];
    let sum = numbers.iter().fold(0, |acc, x| acc + x);
    let product = numbers.iter().copied().reduce(|acc, x| acc * x).unwrap_or(1);
    println!("Sum: {}", sum);
    println!("Product: {}", product);
}
```
