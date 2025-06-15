## 📘 Section: Collections: HashMap  
### 🔹 Category: HashMap and references  
#### ✅ Answer 178: HashMap and references

To store references as values in a `HashMap`, you must specify lifetimes so the references remain valid. Here, we use a `HashMap<&str, &i32>` and insert references to existing integers. The lifetime of the references must outlive the `HashMap`.

```rust
use std::collections::HashMap;

fn main() {
    let a = 10;
    let b = 20;
    let c = 30;
    let mut map: HashMap<&str, &i32> = HashMap::new();
    map.insert("x", &a);
    map.insert("y", &b);
    map.insert("z", &c);

    for (key, value) in &map {
        println!("{}: {}", key, value);
    }
}
```
