## 📘 Section: Option and Result Types  
### 🔹 Category: Multiple Error Types  
#### ✅ Answer 185: Handling multiple error types

This example shows how to handle multiple error types in Rust by returning `Result<i32, Box<dyn std::error::Error>>`. The function can return either an I/O error or a parse error, and the caller can match on the error type if needed.

```rust
use std::fs::File;
use std::io::{self, BufRead, BufReader};
use std::num::ParseIntError;

fn read_number_from_file(path: &str) -> Result<i32, Box<dyn std::error::Error>> {
    let file = File::open(path)?;
    let mut reader = BufReader::new(file);
    let mut line = String::new();
    reader.read_line(&mut line)?;
    let num = line.trim().parse::<i32>()?;
    Ok(num)
}

fn main() {
    match read_number_from_file("number.txt") {
        Ok(n) => println!("Number: {}", n),
        Err(e) => {
            if e.is::<io::Error>() {
                println!("I/O error: {}", e);
            } else if e.is::<ParseIntError>() {
                println!("Parse error: {}", e);
            } else {
                println!("Other error: {}", e);
            }
        }
    }
}
```

- The function can return different error types using `Box<dyn std::error::Error>`.
- The caller can check the error type using `is::<T>()` and handle accordingly.
