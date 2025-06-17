## 📘 Section: File I/O and the Filesystem  
### 🔹 Category: File Permissions and Metadata  
#### ✅ Answer 408: Working with file permissions and metadata

This question shows how to read file permissions and metadata using `std::fs::metadata`.

```rust
use std::fs::{self, File};
use std::io::Write;

fn main() {
    let file_path = "meta.txt";
    let mut file = File::create(file_path).unwrap();
    writeln!(file, "Metadata example").unwrap();
    let metadata = fs::metadata(file_path).unwrap();
    println!("Size: {} bytes", metadata.len());
    println!("Read-only: {}", metadata.permissions().readonly());
}
```
