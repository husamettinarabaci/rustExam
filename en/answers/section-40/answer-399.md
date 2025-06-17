## 📘 Section: Working with Strings and Text
### 🔹 Category: String and UTF-8 Handling
#### ✅ Answer 399: Handling invalid UTF-8 from external input

When converting a byte array to a string, use `String::from_utf8` or `std::str::from_utf8`, which return a `Result`. Handle errors to avoid panics.

```rust
fn main() {
    let valid = vec![104, 101, 108, 108, 111]; // "hello"
    let invalid = vec![0xff, 0xfe, 0xfd];
    match String::from_utf8(valid) {
        Ok(s) => println!("Valid UTF-8: {}", s),
        Err(e) => println!("Invalid UTF-8: {}", e),
    }
    match String::from_utf8(invalid) {
        Ok(s) => println!("Valid UTF-8: {}", s),
        Err(e) => println!("Invalid UTF-8: {}", e),
    }
}
```
