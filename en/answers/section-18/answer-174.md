## 📘 Section: Collections: HashMap  
### 🔹 Category: Checking for Keys and Removing Entries  
#### ✅ Answer 174: Checking for keys and removing entries

You can check if a key exists in a `HashMap` using `contains_key`, and remove an entry with `remove`. Example:

```rust
use std::collections::HashMap;

fn main() {
    let mut scores = HashMap::new();
    scores.insert(String::from("Alice"), 10);
    scores.insert(String::from("Bob"), 20);

    println!("Before removal: {:?}", scores);

    if scores.contains_key("Alice") {
        println!("Alice is in the map.");
    }

    scores.remove("Alice");

    println!("After removal: {:?}", scores);
}
```

- `contains_key` checks for the presence of a key.
- `remove` deletes the entry for the given key.
