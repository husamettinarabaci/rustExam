## 📘 Section: File I/O and the Filesystem  
### 🔹 Category: Reading Files Line by Line  
#### ✅ Answer 403: Reading a file line by line with BufReader

This question shows how to read a file line by line using `BufReader` and the `lines` method. Each line is printed separately.

```rust
use std::fs::File;
use std::io::{self, BufReader, BufRead, Write};

fn main() -> io::Result<()> {
    let mut file = File::create("lines.txt")?;
    writeln!(file, "First line")?;
    writeln!(file, "Second line")?;
    drop(file);
    let file = File::open("lines.txt")?;
    let reader = BufReader::new(file);
    for line in reader.lines() {
        println!("Line: {}", line?);
    }
    Ok(())
}
```
