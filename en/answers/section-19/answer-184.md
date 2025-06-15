## 📘 Section: Option and Result Types  
### 🔹 Category: Result Type and Error Propagation  
#### ✅ Answer 184: Propagating errors with `?`

This example shows how to use the `?` operator to propagate errors in Rust. The function reads a number from a file and returns a `Result<i32, Box<dyn std::error::Error>>`. Any error encountered is automatically returned to the caller.

```rust
use std::fs::File;
use std::io::{self, BufRead, BufReader};

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
        Err(e) => println!("Error: {}", e),
    }
}
```

- The `?` operator returns early if an error occurs.
- The function can propagate any error type that implements `std::error::Error`.
