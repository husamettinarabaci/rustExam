## 📘 Section: Error Handling  
### 🔹 Category: Matching on Result  
#### ✅ Answer 118: Matching on Result

**Explanation:**
You can use pattern matching to handle `Result` values.

```rust
let res: Result<i32, &str> = Ok(10);
match res {
    Ok(val) => println!("Value: {}", val),
    Err(e) => println!("Error: {}", e),
}
```
