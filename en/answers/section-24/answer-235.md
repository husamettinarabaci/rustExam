## 📘 Section: Closures and Iterator Basics  
### 🔹 Category: Chaining Iterator Methods  
#### ✅ Answer 235: Chaining iterator methods in Rust

This example demonstrates how to chain multiple iterator methods in Rust. The program doubles each number in a vector, filters for values greater than 5, and collects the results into a new vector.

```rust
fn main() {
    let numbers = vec![1, 2, 3, 4, 5];
    let processed: Vec<i32> = numbers
        .iter()
        .map(|x| x * 2)
        .filter(|x| *x > 5)
        .collect();
    println!("Processed: {:?}", processed);
}
```
