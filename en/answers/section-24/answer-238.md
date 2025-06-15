## 📘 Section: Closures and Iterator Basics  
### 🔹 Category: Using `enumerate` and `zip`  
#### ✅ Answer 238: Using `enumerate` and `zip` with Iterators

This solution demonstrates how to use the `enumerate` and `zip` methods on iterators. `zip` combines two iterators into pairs, and `enumerate` adds an index to each pair.

```rust
fn main() {
    let a = vec![10, 20, 30];
    let b = vec![1, 2, 3];

    for (i, (x, y)) in a.iter().zip(b.iter()).enumerate() {
        println!("Index: {}, Pair: ({}, {})", i, x, y);
    }
}
```
