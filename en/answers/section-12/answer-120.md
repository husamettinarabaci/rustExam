## 📘 Section: Enums II  
### 🔹 Category: Wildcard Pattern Matching  
#### ✅ Answer 120: Matching with wildcard

**Explanation:**
This example demonstrates how to use the wildcard pattern (`_`) in a match statement with enums in Rust. The wildcard pattern is useful for handling all cases not explicitly matched.

```rust
enum Status {
    Success,
    Error,
    Pending,
}

fn main() {
    let state = Status::Pending;
    match state {
        Status::Success => println!("Operation succeeded!"),
        _ => println!("Not a success."),
    }
}
```
