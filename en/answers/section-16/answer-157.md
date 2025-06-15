## 📘 Section: Collections: Vectors  
### 🔹 Category: Sorting and Ordering  
#### ✅ Answer 157: Sorting a vector

To sort a vector in Rust, you can use the `sort` method, which sorts the vector in place in ascending order. Here is an example:

```rust
fn main() {
    let mut numbers = vec![42, 7, 19, 73, 2];
    numbers.sort();
    println!("Sorted vector: {:?}", numbers);
}
```
