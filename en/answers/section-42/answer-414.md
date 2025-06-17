## 📘 Section: Collections: Vec, HashMap, HashSet
### 🔹 Category: Using HashMap to Store Key-Value Pairs
#### ✅ Answer 414: Using HashMap to store key-value pairs

`HashMap` is used to store key-value pairs. Use `insert` to add entries and `iter` to loop through all pairs.

```rust
use std::collections::HashMap;

fn main() {
    let mut map = HashMap::new();
    map.insert("apple".to_string(), 3);
    map.insert("pear".to_string(), 5);
    for (k, v) in &map {
        println!("{}: {}", k, v);
    }
}
```
