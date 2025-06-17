## 📘 Section: Project Design and Refactoring  
### 🔹 Category: Error Handling Best Practices  
#### ✅ Answer 494: Applying error handling best practices throughout

In Rust, error handling is done using the `Result` type and the `?` operator. Each module can define its own error type and propagate errors upward. Custom error types can provide meaningful messages to the user.

```rust
use std::fs::File;
use std::io::{self, Read};

fn read_file(path: &str) -> Result<String, io::Error> {
    let mut file = File::open(path)?;
    let mut contents = String::new();
    file.read_to_string(&mut contents)?;
    Ok(contents)
}

fn main() {
    match read_file("data.txt") {
        Ok(data) => println!("File content: {}", data),
        Err(e) => eprintln!("Error reading file: {}", e),
    }
}
```
