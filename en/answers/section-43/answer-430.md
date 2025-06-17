## 📘 Section: Enums and Data Modeling  
### 🔹 Category: Leveraging enums for API error types  
#### ✅ Answer 430: Leveraging enums for API error types

Enums can be used to model different error types in APIs. Each error type is represented as an enum variant.

```rust
enum ApiError {
    NotFound,
    Unauthorized,
    Internal(String),
}

fn handle_error(err: ApiError) {
    match err {
        ApiError::NotFound => println!("Resource not found."),
        ApiError::Unauthorized => println!("Unauthorized access."),
        ApiError::Internal(msg) => println!("Server error: {}", msg),
    }
}
```
