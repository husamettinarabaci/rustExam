## 📘 Section: High-Performance Serialization and Deserialization
### 🔹 Category: Versioning and Backward Compatibility
#### ✅ Answer 1227: Versioning and backward compatibility

Below, data serialized with an old struct is deserialized into a new struct with an added field. The new field uses a default value, ensuring backward compatibility.

```rust
use serde::{Serialize, Deserialize};

#[derive(Serialize, Deserialize, Debug)]
struct OldVersion {
    id: u32,
}

#[derive(Serialize, Deserialize, Debug)]
struct NewVersion {
    id: u32,
    #[serde(default)]
    name: String,
}

fn main() {
    let old = OldVersion { id: 42 };
    let json = serde_json::to_string(&old).unwrap();
    let new: NewVersion = serde_json::from_str(&json).unwrap();
    println!("Deserialized with new struct: {:?}", new);
}
```

> Note: `#[serde(default)]` assigns a default value to new fields, preserving compatibility with old data.
