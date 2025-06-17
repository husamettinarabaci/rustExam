## 📘 Section: Collections and Iterators
### 🔹 Category: Iterators and Collections
#### ✅ Answer 336: Iterating with `.enumerate()` and `zip()`

In this example, `.enumerate()` is used to iterate over a vector with indices, and `.zip()` is used to iterate over both a vector and a HashSet simultaneously. Note that HashSet iteration order is arbitrary, so zipped pairs may not match the original insertion order.

```rust
use std::collections::HashSet;

fn main() {
    let vec = vec![10, 20, 30, 40];
    let set: HashSet<_> = [100, 200, 300, 400].iter().cloned().collect();

    // Indexed iteration with enumerate
    for (i, val) in vec.iter().enumerate() {
        println!("vec[{}] = {}", i, val);
    }

    // Simultaneous iteration with zip
    for (v, s) in vec.iter().zip(set.iter()) {
        println!("vec: {}, set: {}", v, s);
    }
}
```
