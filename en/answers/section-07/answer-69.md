## 📚 Section: Collections  
### 🔹 Category: BTreeMap  
#### ✅ Answer 69: Using BTreeMap

**Explanation:**
A `BTreeMap` stores key-value pairs in order. You can iterate in sorted order.

```rust
use std::collections::BTreeMap;

fn main() {
    let mut map = BTreeMap::new();
    map.insert("a", 1);
    map.insert("b", 2);
    for (k, v) in &map {
        println!("{}: {}", k, v);
    }
}
```
