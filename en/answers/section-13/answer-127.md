## 📘 Section: Collections  
### 🔹 Category: HashMap  
#### ✅ Answer 127: Iterating over a HashMap

**Explanation:**
Use a `for` loop to iterate over key-value pairs.

```rust
use std::collections::HashMap;
let mut map = HashMap::new();
map.insert("a", 1);
for (k, v) in &map {
    println!("{}: {}", k, v);
}
```
