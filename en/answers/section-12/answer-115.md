## 📘 Section: Error Handling  
### 🔹 Category: Option vs Result  
#### ✅ Answer 115: Option vs Result

**Explanation:**
`Option` is used when a value may or may not be present, while `Result` is for success or error. Example:

```rust
fn find_even(nums: &[i32]) -> Option<i32> {
    nums.iter().find(|&&x| x % 2 == 0).copied()
}
fn divide(a: i32, b: i32) -> Result<i32, String> {
    if b == 0 { Err("Zero!".to_string()) } else { Ok(a / b) }
}
```
