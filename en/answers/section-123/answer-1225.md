## 📘 Section: High-Performance Serialization and Deserialization
### 🔹 Category: Streaming Serialization
#### ✅ Answer 1225: Streaming serialization for large datasets

This example uses `serde_json::Serializer` to serialize a large vector to a file in a streaming fashion, and then reads and deserializes it back.

```rust
use serde::Serialize;
use serde_json::{Serializer, Deserializer};
use std::fs::File;
use std::io::{BufWriter, BufReader};

fn main() {
    let data: Vec<u32> = (0..100_000).collect();
    let file = File::create("data.json").unwrap();
    let writer = BufWriter::new(file);
    let mut ser = Serializer::new(writer);
    data.serialize(&mut ser).unwrap();

    let file = File::open("data.json").unwrap();
    let reader = BufReader::new(file);
    let deser = Deserializer::from_reader(reader);
    let deser_data: Vec<u32> = serde::Deserialize::deserialize(deser).unwrap();
    println!("Deserialized data length: {}", deser_data.len());
}
```

> Note: Streaming serialization is preferred for large datasets to use memory efficiently.
