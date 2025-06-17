## 📘 Section: Advanced Pattern Matching
### 🔹 Category: Pattern matching on enums
#### ✅ Answer 381: Matching enums with multiple variants

This problem demonstrates how to define an enum with several variants and use a match statement to handle each variant differently. This showcases Rust's powerful pattern matching capabilities for enums.

```rust
enum Status {
    Success,
    Warning(String),
    Error(i32),
}

fn main() {
    let s = Status::Warning("Low battery".to_string());
    match s {
        Status::Success => println!("Operation successful!"),
        Status::Warning(msg) => println!("Warning: {}", msg),
        Status::Error(code) => println!("Error code: {}", code),
    }
}
```
