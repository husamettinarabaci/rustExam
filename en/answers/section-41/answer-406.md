## 📘 Section: File I/O and the Filesystem  
### 🔹 Category: Safe File Handling  
#### ✅ Answer 406: Using Path and PathBuf for safe file handling

This question demonstrates how to use `Path` and `PathBuf` for safe file path management. The example shows file creation and existence checking.

```rust
use std::fs::File;
use std::io::{self, Write};
use std::path::{Path, PathBuf};

fn main() -> io::Result<()> {
    let mut path = PathBuf::from("safe.txt");
    let mut file = File::create(&path)?;
    writeln!(file, "Safe file handling")?;
    if Path::new(&path).exists() {
        println!("File exists: {:?}", path);
    }
    Ok(())
}
```
