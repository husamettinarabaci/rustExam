## 📘 Section: Closures and Iterator Basics  
### 🔹 Category: Using `iter`, `map`, and `filter`  
#### ✅ Answer 233: Using `iter`, `map`, and `filter` in Rust

This example demonstrates how to use the iterator methods `iter`, `map`, and `filter` in Rust. The program creates a vector, squares each element, filters for even squares, and collects the results into a new vector.

```rust
fn main() {
    let numbers = vec![1, 2, 3, 4, 5];
    let even_squares: Vec<i32> = numbers
        .iter()
        .map(|x| x * x)
        .filter(|x| x % 2 == 0)
        .collect();
    println!("Even squares: {:?}", even_squares);
}
```
