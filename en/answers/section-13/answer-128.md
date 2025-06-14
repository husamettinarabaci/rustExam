## 📘 Section: Collections  
### 🔹 Category: HashSet  
#### ✅ Answer 128: What is a HashSet?

**Explanation:**
A `HashSet` is a collection of unique values. Unlike `HashMap`, it only stores keys.

```rust
use std::collections::HashSet;
let mut set = HashSet::new();
set.insert(1);
let exists = set.contains(&1);
```
