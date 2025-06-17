## 📘 Section: Enums, Variants, and Algebraic Data Types  
### 🔹 Category: Modeling with Algebraic Data Types  
#### ✅ Answer 308: Using #[non_exhaustive] for Forward Compatibility

This solution adds the `#[non_exhaustive]` attribute to an error enum. The match statement uses a wildcard (`_`) arm to ensure the code remains compatible even if new variants are added in the future. This is important for forward compatibility in APIs.

```rust
#[non_exhaustive]
enum Error {
    FileError(String),
    ConnectionError(u32),
}

fn error_message(error: Error) {
    match error {
        Error::FileError(msg) => println!("File error: {}", msg),
        Error::ConnectionError(code) => println!("Connection error, code: {}", code),
        _ => println!("Unknown or new error type!"),
    }
}

fn main() {
    let err1 = Error::FileError("File not found".to_string());
    let err2 = Error::ConnectionError(404);
    error_message(err1);
    error_message(err2);
}
```
