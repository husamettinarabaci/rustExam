## 📘 Section: Collections: Vectors  
### 🔹 Category: Inserting Elements  
#### ✅ Answer 159: Inserting elements into a vector

To insert an element into a vector at a specific position in Rust, use the `insert` method. This method inserts the element at the given index and shifts subsequent elements to the right. Here is an example:

```rust
fn main() {
    let mut numbers = vec![1, 2, 4, 5];
    println!("Before insertion: {:?}", numbers);
    numbers.insert(2, 3); // Inserts 3 at index 2
    println!("After insertion: {:?}", numbers);
}
```
