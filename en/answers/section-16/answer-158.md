## 📘 Section: Collections: Vectors  
### 🔹 Category: Removing Elements  
#### ✅ Answer 158: Removing elements from a vector

To remove an element from a vector in Rust, use the `remove` method, which removes and returns the element at the specified index. Here is an example:

```rust
fn main() {
    let mut numbers = vec![5, 10, 15, 20, 25];
    println!("Before removal: {:?}", numbers);
    numbers.remove(2); // Removes the element at index 2 (15)
    println!("After removal: {:?}", numbers);
}
```
