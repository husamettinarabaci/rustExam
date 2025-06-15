## 📘 Section: Enums II  
### 🔹 Category: Advanced Matching and Enum Usage  
#### ✅ Answer 114: Using `if let` with enums

This example shows how to use `if let` for concise pattern matching with enums in Rust. `if let` is useful when you only care about one specific variant and want to ignore the others.

```rust
enum Status {
    Success(i32),
    Error(String),
}

fn main() {
    let result = Status::Success(200);
    if let Status::Success(code) = result {
        println!("Success with code: {}", code);
    }
}
```
