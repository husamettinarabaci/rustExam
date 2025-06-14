## 📘 Section: Error Handling and Result Types  
### 🔹 Category: Basic Error Handling  
#### ✅ Answer 171: Using the Result type for error handling

This function demonstrates how to use the `Result` type for error handling when parsing a string to an integer. It returns a custom error message if parsing fails.

```rust
fn parse_to_int(s: &str) -> Result<i32, String> {
    s.parse::<i32>().map_err(|_| format!("Could not parse '{}' as i32", s))
}
```
