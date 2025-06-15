## 📘 Section: Enums II  
### 🔹 Category: Result and Enum Matching  
#### ✅ Answer 116: Matching on Result

**Explanation:**
This example demonstrates how to use pattern matching with the `Result` enum in Rust. By matching on `Ok` and `Err`, you can handle both successful and error outcomes safely.

```rust
fn main() {
    let outcome: Result<i32, String> = Ok(42);
    match outcome {
        Ok(value) => println!("Success: {}", value),
        Err(e) => println!("Error: {}", e),
    }
}
```
