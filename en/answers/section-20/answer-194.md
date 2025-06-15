## 📘 Section: Error Handling  
### 🔹 Category: Dynamic Errors with Box<dyn Error>  
#### ✅ Answer 194: Using `Box<dyn Error>` for dynamic errors

Using `Box<dyn Error>` as the error type in a `Result` allows your function to return different error types, making error handling more flexible. This is useful when your function can fail in multiple ways.

```rust
use std::error::Error;
use std::fs::File;
use std::io::Read;

fn read_and_parse(filename: &str) -> Result<i32, Box<dyn Error>> {
    let mut file = File::open(filename)?;
    let mut contents = String::new();
    file.read_to_string(&mut contents)?;
    let num: i32 = contents.trim().parse()?;
    Ok(num)
}

fn main() {
    match read_and_parse("input.txt") {
        Ok(n) => println!("Number: {}", n),
        Err(e) => println!("Error: {}", e),
    }
}
```

This approach is especially useful for applications and libraries that need to propagate different error types up the call stack.
