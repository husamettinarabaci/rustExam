## 📘 Section: Collections: HashMap  
### 🔹 Category: HashMap and Option/Result  
#### ✅ Answer 180: HashMap and Option/Result

When accessing values in a `HashMap`, the `get` method returns an `Option`. You can use pattern matching or methods like `unwrap_or` to handle missing keys. You can also write a function that returns a `Result` for more explicit error handling.

```rust
use std::collections::HashMap;

fn get_value<'a>(map: &'a HashMap<&str, i32>, key: &str) -> Result<&'a i32, String> {
    map.get(key).ok_or_else(|| format!("Key '{}' not found", key))
}

fn main() {
    let mut map = HashMap::new();
    map.insert("a", 1);
    map.insert("b", 2);

    // Using Option
    match map.get("a") {
        Some(value) => println!("Found: {}", value),
        None => println!("Key not found"),
    }

    // Using Result
    match get_value(&map, "c") {
        Ok(value) => println!("Found: {}", value),
        Err(e) => println!("{}", e),
    }
}
```
