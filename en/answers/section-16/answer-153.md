## 📚 Section: Collections: Vectors  
### 🔹 Category: Vector Basics  
#### ✅ Answer 153: Accessing vector elements safely

To safely access elements in a vector, use the `get` method, which returns an `Option`. This prevents panics if the index is out of bounds.

```rust
fn main() {
    let numbers = vec![10, 20, 30];
    match numbers.get(1) {
        Some(value) => println!("Second element: {}", value),
        None => println!("No second element!"),
    }
}
```
