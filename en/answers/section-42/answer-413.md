## 📘 Section: Collections: Vec, HashMap, HashSet
### 🔹 Category: Iterating over a Vector by Value, Reference, and Mutably
#### ✅ Answer 413: Iterating over a vector by value, reference, and mutably

You can iterate over a vector by value, by reference, or by mutable reference. Each method has different use cases.

```rust
fn main() {
    let mut v = vec![1, 2, 3];
    for x in v.clone() { println!("By value: {}", x); }
    for x in &v { println!("By reference: {}", x); }
    for x in &mut v { *x *= 2; }
    println!("Updated vector: {:?}", v);
}
```
