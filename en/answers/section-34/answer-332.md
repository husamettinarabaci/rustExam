## 📘 Section: Collections and Iterators
### 🔹 Category: Iterating Over Collections
#### ✅ Answer 332: Iterating over collections with `for` loops

This example shows how to iterate over a `Vec`, a `HashMap`, and a `HashSet` using `for` loops. Each collection's elements are printed appropriately. When iterating over a `HashMap`, both the key and value are accessed together.

```rust
use std::collections::{HashMap, HashSet};

fn main() {
    let v = vec![1, 2, 3];
    let mut m = HashMap::new();
    m.insert("a", 10);
    m.insert("b", 20);
    let mut s = HashSet::new();
    s.insert("apple");
    s.insert("banana");

    println!("Vec elements:");
    for x in &v {
        println!("{}", x);
    }

    println!("HashMap key-value pairs:");
    for (k, v) in &m {
        println!("{}: {}", k, v);
    }

    println!("HashSet elements:");
    for item in &s {
        println!("{}", item);
    }
}
```
