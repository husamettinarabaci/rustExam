## 📘 Section: File I/O and the Filesystem  
### 🔹 Category: Directory Tree Traversal  
#### ✅ Answer 407: Traversing a directory tree with WalkDir (third-party)

This question demonstrates how to use the `walkdir` crate to traverse a directory tree. All files and folders are listed in the terminal.

```rust
use std::fs::{self, File};
use std::io::Write;
use walkdir::WalkDir;

fn main() {
    let dir = "tree_dir";
    fs::create_dir_all(dir).unwrap();
    File::create(format!("{}/a.txt", dir)).unwrap();
    File::create(format!("{}/b.txt", dir)).unwrap();
    for entry in WalkDir::new(dir) {
        let entry = entry.unwrap();
        println!("{}", entry.path().display());
    }
}
```
