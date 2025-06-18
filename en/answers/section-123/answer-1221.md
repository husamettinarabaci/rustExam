## 📘 Section: High-Performance Serialization and Deserialization
### 🔹 Category: Serialization Basics
#### ✅ Answer 1221: Using `serde` for serialization

This example defines a struct and uses `serde` to serialize it to JSON and then deserialize it back. The `serde` and `serde_json` crates make both serialization and deserialization straightforward.

```rust
use serde::{Serialize, Deserialize};
use serde_json;

#[derive(Serialize, Deserialize, Debug)]
struct Person {
    name: String,
    age: u8,
}

fn main() {
    let person = Person { name: "Alice".to_string(), age: 30 };
    // Serialization
    let json = serde_json::to_string(&person).unwrap();
    println!("JSON: {}", json);
    // Deserialization
    let deserialized: Person = serde_json::from_str(&json).unwrap();
    println!("Deserialized: {:?}", deserialized);
}
```

> Note: You must add `serde` and `serde_json` as dependencies in your `Cargo.toml`.
