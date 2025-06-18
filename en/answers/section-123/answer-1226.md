## 📘 Section: High-Performance Serialization and Deserialization
### 🔹 Category: Comparing Serializer Performance
#### ✅ Answer 1226: Performance benchmarking of serializers

Below, the same data structure is serialized with three different serializers, and the time and output size for each are measured. `std::time::Instant` is used for timing, and `len()` for output size.

```rust
use serde::{Serialize, Deserialize};
use std::time::Instant;

#[derive(Serialize, Deserialize)]
struct Data {
    values: Vec<u32>,
}

fn main() {
    let data = Data { values: (0..10_000).collect() };
    // serde_json
    let start = Instant::now();
    let json = serde_json::to_vec(&data).unwrap();
    let dur_json = start.elapsed();
    // bincode
    let start = Instant::now();
    let bin = bincode::serialize(&data).unwrap();
    let dur_bin = start.elapsed();
    // ciborium
    let start = Instant::now();
    let mut cbor = Vec::new();
    ciborium::ser::into_writer(&data, &mut cbor).unwrap();
    let dur_cbor = start.elapsed();
    println!("serde_json: {} bytes, {:?}", json.len(), dur_json);
    println!("bincode: {} bytes, {:?}", bin.len(), dur_bin);
    println!("ciborium: {} bytes, {:?}", cbor.len(), dur_cbor);
}
```

> Note: Results may vary by hardware and data structure. `bincode` is usually the smallest and fastest, while `serde_json` is the most human-readable.
