## 📘 Section: File I/O and the Filesystem  
### 🔹 Category: Opening and Reading Files  
#### ✅ Answer 401: Opening and reading a file with std::fs

This question teaches you how to create a file, write to it, and then open and read its contents. Use `std::fs::File` to open the file and `std::io::Read` to read its contents.

```rust
use std::fs::File;
use std::io::{self, Read, Write};

fn main() -> io::Result<()> {
    let mut file = File::create("example.txt")?;
    writeln!(file, "Hello, Rust!")?;
    drop(file);
    let mut file = File::open("example.txt")?;
    let mut contents = String::new();
    file.read_to_string(&mut contents)?;
    println!("File contents: {}", contents);
    Ok(())
}
```
