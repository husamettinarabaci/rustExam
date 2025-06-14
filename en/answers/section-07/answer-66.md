## 📚 Section: Collections  
### 🔹 Category: HashSet  
#### ✅ Answer 66: Using a HashSet

**Explanation:**
A `HashSet` stores unique values. You can add elements and check for membership.

```rust
use std::collections::HashSet;

fn main() {
    let mut set = HashSet::new();
    set.insert(1);
    set.insert(2);
    println!("Contains 1? {}", set.contains(&1));
}
```
