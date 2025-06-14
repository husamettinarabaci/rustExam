## 📘 Section: Collections  
### 🔹 Category: HashSet  
#### ✅ Answer 129: Removing elements from collections

**Explanation:**
Use `.remove()` for `HashSet`/`HashMap`, `.remove()` or `.pop()` for vectors.

```rust
let mut v = vec![1, 2, 3];
v.pop();
use std::collections::{HashMap, HashSet};
let mut map = HashMap::new();
map.insert("a", 1);
map.remove("a");
let mut set = HashSet::new();
set.insert(1);
set.remove(&1);
```
