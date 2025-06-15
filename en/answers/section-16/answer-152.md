## 📚 Section: Collections: Vectors  
### 🔹 Category: Vector Basics  
#### ✅ Answer 152: Adding and removing elements from a vector

To add elements to a vector in Rust, use the `push` method. To remove the last element, use the `pop` method. The vector must be mutable to modify its contents.

```rust
fn main() {
    let mut numbers = vec![1, 2, 3];
    numbers.push(4);
    numbers.push(5);
    numbers.pop();
    println!("{:?}", numbers);
}
```
