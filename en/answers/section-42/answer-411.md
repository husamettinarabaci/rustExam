## 📘 Section: Collections: Vec, HashMap, HashSet
### 🔹 Category: Creating and Initializing a Vec
#### ✅ Answer 411: Creating and initializing a Vec

Vectors in Rust are dynamic arrays. You can create an empty vector with `Vec::new()` and an initialized vector with the `vec![]` macro.

```rust
fn main() {
    let mut v1: Vec<i32> = Vec::new();
    let v2 = vec![1, 2, 3];
    println!("Empty vector: {:?}", v1);
    println!("Initialized vector: {:?}", v2);
}
```
