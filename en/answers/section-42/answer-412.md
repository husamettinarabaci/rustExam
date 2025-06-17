## 📘 Section: Collections: Vec, HashMap, HashSet
### 🔹 Category: Adding and Removing Elements from a Vec
#### ✅ Answer 412: Adding and removing elements from a Vec

Use `push` to add elements to a Vec and `pop` to remove the last element. `pop` returns the removed value or `None` if empty.

```rust
fn main() {
    let mut fruits = Vec::new();
    fruits.push("apple".to_string());
    fruits.push("pear".to_string());
    fruits.push("banana".to_string());
    fruits.pop();
    println!("Vector: {:?}", fruits);
}
```
