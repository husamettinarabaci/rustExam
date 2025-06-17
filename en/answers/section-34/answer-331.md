## 📘 Section: Collections and Iterators  
### 🔹 Category: Working with Vec, HashMap, and HashSet  
#### ✅ Answer 331: Working with `Vec`, `HashMap`, and `HashSet`

In this example, a `Vec`, a `HashMap`, and a `HashSet` are created and initialized. Values are added to each collection, and their contents are printed to the screen.

```rust
use std::collections::{HashMap, HashSet};

fn main() {
    let mut v = vec![1, 2, 3];
    let mut m = HashMap::new();
    m.insert("a", 10);
    m.insert("b", 20);
    let mut s = HashSet::new();
    s.insert("apple");
    s.insert("banana");

    println!("Vec: {:?}", v);
    println!("HashMap: {:?}", m);
    println!("HashSet: {:?}", s);
}
```
