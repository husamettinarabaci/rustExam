## 📘 Section: Collections: HashMap  
### 🔹 Category: Iterating over Key-Value Pairs  
#### ✅ Answer 173: Iterating over key-value pairs

You can iterate over all key-value pairs in a `HashMap` using a `for` loop and the `.iter()` method. Example:

```rust
use std::collections::HashMap;

fn main() {
    let mut scores = HashMap::new();
    scores.insert(String::from("Alice"), 10);
    scores.insert(String::from("Bob"), 20);

    for (key, value) in &scores {
        println!("{}: {}", key, value);
    }
}
```

- `.iter()` or `&scores` allows you to iterate over references to key-value pairs.
- Each iteration gives you a tuple `(key, value)` as references.
