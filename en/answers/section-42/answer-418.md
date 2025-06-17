## 📘 Section: Collections: Vec, HashMap, HashSet
### 🔹 Category: Set Operations (Union, Intersection, Difference)
#### ✅ Answer 418: Set operations (union, intersection, difference)

You can easily perform union, intersection, and difference operations with `HashSet`. The results are also sets.

```rust
use std::collections::HashSet;

fn main() {
    let set1: HashSet<_> = [1, 2, 3].iter().cloned().collect();
    let set2: HashSet<_> = [2, 3, 4].iter().cloned().collect();
    println!("Union: {:?}", set1.union(&set2).collect::<Vec<_>>());
    println!("Intersection: {:?}", set1.intersection(&set2).collect::<Vec<_>>());
    println!("Difference: {:?}", set1.difference(&set2).collect::<Vec<_>>());
}
```
