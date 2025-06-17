## 📘 Section: Error Handling with Result and Option  
### 🔹 Category: Using thiserror to derive error enums  
#### ✅ Answer 329: Using thiserror to derive error enums

The `thiserror` crate makes it easy to define custom error types in Rust with clear, descriptive messages. By deriving `#[derive(Error)]`, you can create error enums and specify custom messages for each variant.

```rust
use thiserror::Error;

#[derive(Debug, Error)]
enum MyError {
    #[error("File not found: {0}")]
    NotFound(String),
    #[error("Invalid number: {0}")]
    InvalidNumber(String),
}

fn parse_file_content(content: &str) -> Result<i32, MyError> {
    content.trim().parse::<i32>()
        .map_err(|_| MyError::InvalidNumber(content.to_string()))
}

fn main() {
    let result = parse_file_content("abc");
    match result {
        Ok(val) => println!("Result: {val}"),
        Err(e) => println!("Error: {e}"),
    }
}
```
