## 📘 Section: Collections: HashMap  
### 🔹 Category: HashMap with Custom Types  
#### ✅ Answer 176: HashMap with custom types

You can use custom structs as keys or values in a `HashMap`. If used as a key, the struct must implement `Eq`, `PartialEq`, and `Hash`. Example:

```rust
use std::collections::HashMap;
use std::hash::{Hash, Hasher};

#[derive(Hash, Eq, PartialEq, Debug)]
struct Point {
    x: i32,
    y: i32,
}

fn main() {
    let mut points = HashMap::new();
    points.insert(Point { x: 1, y: 2 }, "A");
    points.insert(Point { x: 3, y: 4 }, "B");

    println!("{:?}", points);
}
```

- The `Point` struct derives `Hash`, `Eq`, and `PartialEq` for use as a key.
- Custom types can also be used as values without extra traits.
