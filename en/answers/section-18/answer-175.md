## 📘 Section: Error Handling and Result Types  
### 🔹 Category: Matching on Result  
#### ✅ Answer 175: Handling different Result variants with match

This function demonstrates how to use pattern matching to handle both `Ok` and `Err` cases of a `Result`.

```rust
fn handle_result(res: Result<i32, String>) {
    match res {
        Ok(val) => println!("Value: {}", val),
        Err(e) => println!("Error: {}", e),
    }
}
```
