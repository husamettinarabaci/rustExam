## 📚 Section: Collections  
### 🔹 Category: BTreeSet  
#### ✅ Answer 70: Using BTreeSet

**Explanation:**
A `BTreeSet` stores unique values in order. You can iterate in sorted order.

```rust
use std::collections::BTreeSet;

fn main() {
    let mut set = BTreeSet::new();
    set.insert(3);
    set.insert(1);
    set.insert(2);
    for x in &set {
        println!("{}", x);
    }
}
```
