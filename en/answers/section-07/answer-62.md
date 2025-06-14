## 📚 Section: Collections  
### 🔹 Category: HashMaps  
#### ✅ Answer 62: Using a HashMap

**Explanation:**
A `HashMap` stores key-value pairs. You can insert, retrieve, and iterate over entries.

```rust
use std::collections::HashMap;

fn main() {
    let mut map = HashMap::new();
    map.insert("a", 1);
    map.insert("b", 2);
    println!("a: {:?}", map.get("a"));
}
```
