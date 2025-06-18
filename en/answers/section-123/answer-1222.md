## 📘 Section: High-Performance Serialization and Deserialization
### 🔹 Category: Custom Serialization Formats
#### ✅ Answer 1222: Custom serialization formats and codecs

This example serializes and deserializes a struct using the MessagePack format with the `rmp-serde` crate.

```rust
use serde::{Serialize, Deserialize};
use rmp_serde::{encode, decode};

#[derive(Serialize, Deserialize, Debug, PartialEq)]
struct Point {
    x: i32,
    y: i32,
}

fn main() {
    let point = Point { x: 10, y: 20 };
    // Serialization
    let buf = encode::to_vec(&point).unwrap();
    println!("MessagePack bytes: {:?}", buf);
    // Deserialization
    let deserialized: Point = decode::from_slice(&buf).unwrap();
    println!("Deserialized: {:?}", deserialized);
}
```

> Note: Add the `rmp-serde` crate to your `Cargo.toml`.
