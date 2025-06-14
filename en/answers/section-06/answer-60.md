## 📚 Section: Error Handling  
### 🔹 Category: Error Chaining  
#### ✅ Answer 60: Error chaining with `thiserror` or `anyhow`

**Explanation:**
Crates like `thiserror` and `anyhow` make error handling and chaining easier in Rust.

```rust
use anyhow::{Result, Context};
use std::fs::File;

fn main() -> Result<()> {
    File::open("foo.txt").context("Failed to open file")?;
    Ok(())
}
```
