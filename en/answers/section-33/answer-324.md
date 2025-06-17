## 📘 Section: Error Handling with Result and Option  
### 🔹 Category: Converting Option to Result with Custom Error Type  
#### ✅ Answer 324: Converting Option to Result with a Custom Error Type

In Rust, you can define your own error type using an `enum` and use it when converting an `Option<T>` to a `Result<T, E>`. Use `ok_or` or `ok_or_else` to provide your custom error type in the error case.

```rust
#[derive(Debug)]
enum MyError {
    NotFound,
}

fn main() {
    let maybe_val: Option<i32> = None;
    let result: Result<i32, MyError> = maybe_val.ok_or(MyError::NotFound);
    match result {
        Ok(v) => println!("Value found: {}", v),
        Err(e) => println!("Error occurred: {:?}", e),
    }
}
```
