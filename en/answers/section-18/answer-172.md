## 📘 Section: Collections: HashMap  
### 🔹 Category: Accessing and Updating Values in a HashMap  
#### ✅ Answer 172: Accessing and updating values in a `HashMap`

You can access values in a `HashMap` using the `get` method, which returns an `Option`. To update a value, use the `insert` method or mutate the value via `get_mut`. Example:

```rust
use std::collections::HashMap;

fn main() {
    let mut scores = HashMap::new();
    scores.insert(String::from("Alice"), 10);
    scores.insert(String::from("Bob"), 20);

    // Access a value
    if let Some(score) = scores.get("Alice") {
        println!("Alice's score: {}", score);
    }

    // Update a value
    if let Some(score) = scores.get_mut("Bob") {
        *score += 5;
    }

    println!("{:?}", scores);
}
```

- `get` returns an `Option<&V>`.
- `get_mut` returns an `Option<&mut V>` for mutation.
- `insert` can also be used to overwrite values.
