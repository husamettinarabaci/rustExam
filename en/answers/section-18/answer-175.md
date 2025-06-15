## 📘 Section: Collections: HashMap  
### 🔹 Category: Using Non-String Keys in a HashMap  
#### ✅ Answer 175: Using non-string keys in a `HashMap`

You can use any type that implements the `Eq` and `Hash` traits as a key in a `HashMap`, including integers. Example:

```rust
use std::collections::HashMap;

fn main() {
    let mut numbers = HashMap::new();
    numbers.insert(1, String::from("one"));
    numbers.insert(2, String::from("two"));

    println!("{:?}", numbers);
}
```

- Here, the keys are integers and the values are strings.
- Any type that implements `Eq` and `Hash` can be used as a key.
