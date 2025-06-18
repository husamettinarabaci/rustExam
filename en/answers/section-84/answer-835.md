## 📘 Section: Cross-Crate API Design and Versioning  
### 🔹 Category: Feature Flags and Conditional Compilation  
#### ✅ Answer 835: Feature flags and conditional compilation

Feature flags are settings defined in Cargo.toml that control optional functionality in a crate. With conditional compilation, certain code blocks are compiled only if the feature is enabled:

```toml
[features]
default = []
serde = ["serde"]
```

```rust
#[cfg(feature = "serde")]
fn serialize() { /* ... */ }
```

This increases the flexibility and modularity of the API.
