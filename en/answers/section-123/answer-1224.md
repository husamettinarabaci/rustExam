## 📘 Section: High-Performance Serialization and Deserialization
### 🔹 Category: Using bincode and ciborium
#### ✅ Answer 1224: Using the `bincode` and `ciborium` crates

This example serializes and deserializes a struct using both `bincode` and `ciborium`. `bincode` provides a fast, compact binary format, while `ciborium` implements the CBOR standard.

```rust
use serde::{Serialize, Deserialize};

#[derive(Serialize, Deserialize, Debug, PartialEq)]
struct Item {
    id: u32,
    name: String,
}

fn main() {
    let item = Item { id: 1, name: "Pen".to_string() };
    // Serialize with bincode
    let bincode_bytes = bincode::serialize(&item).unwrap();
    println!("bincode bytes: {:?}", bincode_bytes);
    let bincode_item: Item = bincode::deserialize(&bincode_bytes).unwrap();
    println!("bincode deserialized: {:?}", bincode_item);
    // Serialize with ciborium
    let mut cbor_bytes = Vec::new();
    ciborium::ser::into_writer(&item, &mut cbor_bytes).unwrap();
    println!("ciborium bytes: {:?}", cbor_bytes);
    let cbor_item: Item = ciborium::de::from_reader(&cbor_bytes[..]).unwrap();
    println!("ciborium deserialized: {:?}", cbor_item);
}
```

> Note: Add `bincode` and `ciborium` to your dependencies. `bincode` is more compact and fast, while `ciborium` is CBOR-compliant.
