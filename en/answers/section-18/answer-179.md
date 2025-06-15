## 📘 Section: Collections: HashMap  
### 🔹 Category: HashMap and lifetimes  
#### ✅ Answer 179: HashMap and lifetimes

When storing references in a `HashMap`, you must specify lifetimes to ensure the references are valid for the duration of the map. Here, the function takes a `HashMap<&str, &i32>` with an explicit lifetime parameter and prints its contents.

```rust
use std::collections::HashMap;

fn print_map<'a>(map: &HashMap<&'a str, &'a i32>) {
    for (key, value) in map {
        println!("{}: {}", key, value);
    }
}

fn main() {
    let a = 1;
    let b = 2;
    let mut map: HashMap<&str, &i32> = HashMap::new();
    map.insert("one", &a);
    map.insert("two", &b);
    print_map(&map);
}
```
