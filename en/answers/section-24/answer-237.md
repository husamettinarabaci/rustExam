## 📘 Section: Closures and Iterator Basics  
### 🔹 Category: Using `find` and `position`  
#### ✅ Answer 237: Using `find` and `position` in Rust

This example demonstrates how to use the iterator methods `find` and `position` in Rust. The program finds the first element greater than 3 and the index of the first even number in a vector.

```rust
fn main() {
    let numbers = vec![1, 2, 3, 4, 5];
    let first_gt_3 = numbers.iter().find(|&&x| x > 3);
    let first_even_pos = numbers.iter().position(|&x| x % 2 == 0);
    println!("First element > 3: {:?}", first_gt_3);
    println!("Index of first even: {:?}", first_even_pos);
}
```
