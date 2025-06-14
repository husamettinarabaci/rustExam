## 📚 Section: Error Handling  
### 🔹 Category: Unwrap and Expect  
#### ✅ Answer 56: Using `unwrap` and `expect`

**Explanation:**
`unwrap` and `expect` are used to get the value inside an `Option` or `Result`. If the value is `None` or `Err`, they panic. `expect` lets you provide a custom panic message.

```rust
fn main() {
    let some = Some(10);
    println!("{}", some.unwrap()); // 10

    let none: Option<i32> = None;
    // none.unwrap(); // panics

    let ok: Result<i32, &str> = Ok(5);
    println!("{}", ok.expect("Should be Ok")); // 5

    let err: Result<i32, &str> = Err("fail");
    // err.expect("Custom error message"); // panics with message
}
```
