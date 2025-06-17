## 📘 Section: Collections: Vec, HashMap, HashSet
### 🔹 Category: Checking for Key Existence with contains_key
#### ✅ Answer 416: Checking for key existence with contains_key

You can check if a key exists in a HashMap using `contains_key`.

```rust
use std::collections::HashMap;

fn main() {
    let mut map = HashMap::new();
    map.insert("apple".to_string(), 3);
    map.insert("pear".to_string(), 5);
    println!("banana exists? {}", map.contains_key("banana"));
}
```
