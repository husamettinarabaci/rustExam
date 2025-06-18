## 📘 Section: Collections: HashMap  
### 🔹 Category: HashMap and ownership  
#### ✅ Answer 177: HashMap and ownership

In this example, a `HashMap<String, String>` is created and a value is removed using `remove`. The `remove` method returns ownership of the value and deletes it from the map. The removed value is now owned by you and is no longer in the HashMap.

```rust
use std::collections::HashMap;

fn main() {
    let mut map = HashMap::new();
    map.insert("name".to_string(), "Rustacean".to_string());
    map.insert("lang".to_string(), "Rust".to_string());

    if let Some(value) = map.remove("name") {
        println!("Removed value: {}", value);
    } else {
        println!("Key not found.");
    }
    // The key "name" is no longer in the HashMap.
}
```

The `remove` method gives you ownership of the value, so you can use it freely outside the HashMap.
