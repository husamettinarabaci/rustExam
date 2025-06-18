## 📘 Section: Advanced Error Handling and Recovery
### 🔹 Category: Using error codes and diagnostics in APIs
#### ✅ Answer 675: Using error codes and diagnostics in APIs

Error enums with codes and diagnostics help standardize API error handling. Each variant can have a code and a message.

```rust
#[derive(Debug)]
enum ApiError {
    NotFound,
    Unauthorized,
    Internal,
}

impl ApiError {
    fn code(&self) -> u16 {
        match self {
            ApiError::NotFound => 404,
            ApiError::Unauthorized => 401,
            ApiError::Internal => 500,
        }
    }
    fn diagnostic(&self) -> &'static str {
        match self {
            ApiError::NotFound => "Resource not found.",
            ApiError::Unauthorized => "Unauthorized access.",
            ApiError::Internal => "Internal server error.",
        }
    }
}

fn main() {
    let err = ApiError::Unauthorized;
    println!("Error {}: {}", err.code(), err.diagnostic());
}
```
