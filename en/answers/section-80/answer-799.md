## 📘 Section: Systems Programming Advanced Topics  
### 🔹 Category: Cross-Platform System APIs  
#### ✅ Answer 799: Cross-platform system APIs

Rust supports cross-platform APIs using conditional compilation. Example:

```rust
#[cfg(target_os = "windows")]
pub fn platform_name() -> &'static str { "Windows" }
#[cfg(target_os = "linux")]
pub fn platform_name() -> &'static str { "Linux" }
```
This approach abstracts over OS differences for a unified API.
