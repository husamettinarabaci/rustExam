## 📘 Section: Closures and Iterator Basics  
### 🔹 Category: Consuming Iterators with `collect`  
#### ✅ Answer 234: Consuming iterators with `collect` in Rust

This example demonstrates how to use the `collect` method to consume an iterator and gather the results into a new vector. The program increments each element of the original vector by 1 and collects the results.

```rust
fn main() {
    let numbers = vec![1, 2, 3, 4, 5];
    let incremented: Vec<i32> = numbers.iter().map(|x| x + 1).collect();
    println!("Incremented: {:?}", incremented);
}
```
