## 📘 Section: Collections: HashMap  
### 🔹 Category: Creating a HashMap and Inserting Values  
#### ✅ Answer 171: Creating a `HashMap` and inserting values

To create a `HashMap` in Rust, you need to import it from the standard library. You can then insert key-value pairs using the `insert` method. Here is an example:

```rust
use std::collections::HashMap;

fn main() {
    let mut scores = HashMap::new();
    scores.insert(String::from("Alice"), 10);
    scores.insert(String::from("Bob"), 20);

    println!("{:?}", scores);
}
```

- `HashMap::new()` creates an empty map.
- `insert` adds key-value pairs.
- The map is printed using the debug format.
