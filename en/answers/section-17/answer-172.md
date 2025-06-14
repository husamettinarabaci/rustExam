## 📘 Section: Error Handling and Result Types  
### 🔹 Category: The `?` Operator  
#### ✅ Answer 172: Propagating errors with the `?` operator

This function shows how to use the `?` operator to propagate errors when reading a file. The operator automatically returns the error if one occurs.

```rust
use std::fs;
use std::io;

fn read_file_contents(path: &str) -> Result<String, io::Error> {
    fs::read_to_string(path)
}
```
