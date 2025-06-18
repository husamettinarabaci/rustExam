## 📘 Section: Advanced Error Handling and Recovery
### 🔹 Category: Converting between different error types
#### ✅ Answer 680: Converting between different error types

Implementing `From` or `Into` allows conversion between error types, simplifying error propagation.

```rust
#[derive(Debug)]
struct ParseError;

#[derive(Debug)]
struct AppError;

impl From<ParseError> for AppError {
    fn from(_: ParseError) -> Self {
        AppError
    }
}

fn parse() -> Result<(), ParseError> {
    Err(ParseError)
}

fn run() -> Result<(), AppError> {
    parse()?;
    Ok(())
}
```
