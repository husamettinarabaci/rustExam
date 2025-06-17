## 📘 Section: Collections: Vec, HashMap, HashSet
### 🔹 Category: Using HashSet for Unique Unordered Values
#### ✅ Answer 417: Using HashSet for unique unordered values

A `HashSet` only stores unique values. Adding the same value multiple times only keeps one copy.

```rust
use std::collections::HashSet;

fn main() {
    let mut set = HashSet::new();
    set.insert("apple");
    set.insert("pear");
    set.insert("apple");
    for v in &set {
        println!("{}", v);
    }
}
```
