## 📘 Section: High-Performance Serialization and Deserialization
### 🔹 Category: Designing Efficient Schema Evolutions
#### ✅ Answer 1230: Designing efficient schema evolutions

The best practice for schema evolution is to use `#[serde(default)]` for new or removed fields, and `#[serde(rename = "...")]` for renamed fields. This preserves compatibility with old data and prevents data loss.

```rust
use serde::{Serialize, Deserialize};

#[derive(Serialize, Deserialize, Debug)]
struct Old {
    id: u32,
    name: String,
}

#[derive(Serialize, Deserialize, Debug)]
struct New {
    id: u32,
    #[serde(default)]
    name: String,
    #[serde(default)]
    email: Option<String>,
    #[serde(rename = "id")]
    identifier: u32,
}

// Old data can be deserialized into the new struct.
```

> Note: Use `#[serde(default)]` for new/removed fields and `#[serde(rename = "...")]` for renames. These attributes help prevent data loss during schema evolution.
