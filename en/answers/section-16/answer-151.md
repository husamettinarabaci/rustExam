## 📚 Section: Collections: Vectors  
### 🔹 Category: Vector Basics  
#### ✅ Answer 151: Creating and initializing a vector

To create and initialize a vector in Rust, use the `vec!` macro. This macro allows you to easily create a vector with initial values. You can print the vector using the `println!` macro, which supports the `Debug` format for vectors.

```rust
fn main() {
    let numbers = vec![1, 2, 3];
    println!("{:?}", numbers);
}
```
