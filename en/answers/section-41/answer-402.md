## 📘 Section: File I/O and the Filesystem  
### 🔹 Category: Writing and Appending to Files  
#### ✅ Answer 402: Writing to a file with write and append modes

This question demonstrates how to write to a file and then append more data. Use `OpenOptions` to open the file in append mode.

```rust
use std::fs::{File, OpenOptions};
use std::io::{self, Write, Read};

fn main() -> io::Result<()> {
    let mut file = File::create("output.txt")?;
    writeln!(file, "First line")?;
    drop(file);
    let mut file = OpenOptions::new().append(true).open("output.txt")?;
    writeln!(file, "Appended line")?;
    drop(file);
    let mut contents = String::new();
    File::open("output.txt")?.read_to_string(&mut contents)?;
    println!("File contents:\n{}", contents);
    Ok(())
}
```
