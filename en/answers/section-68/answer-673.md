## 📘 Section: Advanced Error Handling and Recovery
### 🔹 Category: Wrapping and chaining errors with context
#### ✅ Answer 673: Wrapping and chaining errors with context

Wrapping errors with context helps diagnose issues by providing a chain of error messages. The `anyhow` crate's `.context()` method is commonly used for this purpose.

```rust
use anyhow::{Context, Result};
use std::fs::File;

fn read_file(path: &str) -> Result<String> {
    std::fs::read_to_string(path)
        .context(format!("Failed to read file: {}", path))
}

fn main() {
    match read_file("nonexistent.txt") {
        Ok(_) => println!("File read successfully"),
        Err(e) => println!("Error: {:#}", e),
    }
}
```
