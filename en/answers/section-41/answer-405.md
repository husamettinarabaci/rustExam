## 📘 Section: File I/O and the Filesystem  
### 🔹 Category: File and Path Existence  
#### ✅ Answer 405: Checking if a file or path exists

This question teaches you how to check for the existence of a file and delete it. Use `Path::exists` to check for existence.

```rust
use std::fs::{self, File};
use std::path::Path;

fn main() {
    let file_path = "check.txt";
    File::create(file_path).unwrap();
    if Path::new(file_path).exists() {
        println!("{} exists.", file_path);
    }
    fs::remove_file(file_path).unwrap();
    if !Path::new(file_path).exists() {
        println!("{} deleted.", file_path);
    }
}
```
