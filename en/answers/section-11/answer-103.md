## 📘 Section: Enums I  
### 🔹 Category: Enum Pattern Matching  
#### ✅ Answer 103: Pattern matching on enums

This example demonstrates how to use pattern matching on an enum in Rust. The `match` statement allows you to handle each variant differently, including extracting data from variants that carry values.

```rust
enum Status {
    Success,
    Error(String),
}

fn main() {
    let result = Status::Error(String::from("File not found"));
    match result {
        Status::Success => println!("Operation succeeded!"),
        Status::Error(msg) => println!("Error: {}", msg),
    }
}
```
