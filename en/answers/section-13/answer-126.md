## 📘 Section: Collections  
### 🔹 Category: HashMap  
#### ✅ Answer 126: What is a HashMap?

**Explanation:**
A `HashMap` stores key-value pairs. You can insert and access values by key.

```rust
use std::collections::HashMap;
let mut map = HashMap::new();
map.insert("a", 1);
let v = map.get("a");
```
