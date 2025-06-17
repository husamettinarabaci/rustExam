## 📘 Section: Collections and Iterators  
### 🔹 Category: Iterating over collections  
#### ✅ Answer 333: Using .iter(), .iter_mut(), and .into_iter() on collections

This example demonstrates how to use `.iter()`, `.iter_mut()`, and `.into_iter()` on `Vec`, `HashMap`, and `HashSet`. `.iter()` iterates by reference, `.iter_mut()` by mutable reference (allowing modification), and `.into_iter()` by value (taking ownership). Only `Vec` elements are modified with `.iter_mut()` in this example.

```rust
use std::collections::{HashMap, HashSet};

fn main() {
    let mut vec = vec![1, 2, 3];
    let mut map = HashMap::new();
    map.insert("a", 10);
    map.insert("b", 20);
    let mut set = HashSet::new();
    set.insert("apple");
    set.insert("banana");

    // .iter()
    for v in vec.iter() {
        println!("Vec .iter(): {}", v);
    }

    // .iter_mut()
    for v in vec.iter_mut() {
        *v *= 2;
        println!("Vec .iter_mut(): {}", v);
    }

    // .into_iter()
    for v in vec.into_iter() {
        println!("Vec .into_iter(): {}", v);
    }

    // HashMap .iter()
    for (k, v) in map.iter() {
        println!("HashMap .iter(): {} -> {}", k, v);
    }

    // HashSet .iter()
    for s in set.iter() {
        println!("HashSet .iter(): {}", s);
    }
}
```
