## 📚 Section: Collections: Vectors  
### 🔹 Category: Vector Basics  
#### ✅ Answer 155: Modifying elements in a vector

To modify elements in a vector, iterate over mutable references using a `for` loop and the `iter_mut` method. You can then change each element in place.

```rust
fn main() {
    let mut numbers = vec![1, 2, 3];
    for n in numbers.iter_mut() {
        *n *= 2;
    }
    println!("{:?}", numbers);
}
```
