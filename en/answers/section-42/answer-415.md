## 📘 Section: Collections: Vec, HashMap, HashSet
### 🔹 Category: Accessing and Updating Entries in a HashMap
#### ✅ Answer 415: Accessing and updating entries in a HashMap

Use `get` to access a value in a HashMap and `insert` to update it. `get` returns an Option.

```rust
use std::collections::HashMap;

fn main() {
    let mut map = HashMap::new();
    map.insert("apple".to_string(), 3);
    map.insert("pear".to_string(), 5);
    map.insert("apple".to_string(), 10); // update
    if let Some(val) = map.get("apple") {
        println!("apple: {}", val);
    }
}
```
