## 📘 Section: Error Handling  
### 🔹 Category: Using expect and unwrap  
#### ✅ Answer 191: Using `expect` and `unwrap` safely

`unwrap` and `expect` are used to extract values from `Option` and `Result` types, but they will panic if called on `None` or `Err`. To use them safely, always ensure the value is present or handle the error case first. `expect` allows you to provide a custom panic message, which is helpful for debugging.

```rust
fn main() {
    let some_option = Some(10);
    // Safe: we know it's Some
    let value = some_option.unwrap();
    println!("Value: {}", value);

    let some_result: Result<i32, &str> = Ok(20);
    // Safe: we know it's Ok
    let value = some_result.expect("Should be Ok");
    println!("Value: {}", value);

    let none_option: Option<i32> = None;
    // Avoid panics: check before unwrapping
    if let Some(v) = none_option {
        println!("Safe unwrap: {}", v);
    } else {
        println!("No value to unwrap");
    }

    let err_result: Result<i32, &str> = Err("error");
    // Avoid panics: check before unwrapping
    match err_result {
        Ok(v) => println!("Safe expect: {}", v),
        Err(e) => println!("Error: {}", e),
    }
}
```

Use `unwrap` and `expect` only when you are certain the value is present, or in quick prototypes and tests. For production code, prefer pattern matching or combinators to handle errors gracefully.
