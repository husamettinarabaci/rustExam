## 📚 Section: Collections: Vectors  
### 🔹 Category: Vector Basics  
#### ✅ Answer 154: Iterating over a vector

To iterate over a vector in Rust, use a `for` loop. You can iterate over references to the elements and print each one.

```rust
fn main() {
    let fruits = vec!["apple", "banana", "cherry"];
    for fruit in &fruits {
        println!("{}", fruit);
    }
}
```
