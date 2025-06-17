## 📘 Section: File I/O and the Filesystem  
### 🔹 Category: Copying, Renaming, and Deleting Files  
#### ✅ Answer 409: Copying, renaming, or deleting files

This question demonstrates how to copy, rename, and delete a file using `std::fs::copy`, `std::fs::rename`, and `std::fs::remove_file`.

```rust
use std::fs::{self, File};
use std::io::Write;

fn main() {
    let src = "copyme.txt";
    let mut file = File::create(src).unwrap();
    writeln!(file, "File to copy").unwrap();
    fs::copy(src, "copied.txt").unwrap();
    fs::rename("copied.txt", "renamed.txt").unwrap();
    fs::remove_file("renamed.txt").unwrap();
}
```
