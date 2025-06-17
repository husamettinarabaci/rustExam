## 📘 Section: File I/O and the Filesystem  
### 🔹 Category: Directory Operations  
#### ✅ Answer 404: Creating and removing directories

This question demonstrates how to create, check, and remove a directory. Use `std::fs::create_dir`, `std::path::Path::exists`, and `std::fs::remove_dir`.

```rust
use std::fs;
use std::path::Path;

fn main() {
    let dir = "test_dir";
    fs::create_dir(dir).unwrap();
    if Path::new(dir).exists() {
        println!("{} directory created.", dir);
    }
    fs::remove_dir(dir).unwrap();
    if !Path::new(dir).exists() {
        println!("{} directory removed.", dir);
    }
}
```
