## 📘 Section: Error Handling with Result and Option  
### 🔹 Category: unwrap, expect, and safe alternatives  
#### ✅ Answer 326: Using `unwrap`, `expect`, and their safe alternatives

The `unwrap` and `expect` methods resolve an `Option` or `Result` directly, but will panic if the value is `None` or `Err`. Safe alternatives like `unwrap_or`, `unwrap_or_else`, and `match` allow you to handle errors gracefully without panicking.

```rust
fn main() {
    let some = Some(10);
    let none: Option<i32> = None;
    let ok: Result<i32, &str> = Ok(5);
    let err: Result<i32, &str> = Err("error");

    // Risk of panic: unwrap and expect
    // println!("{}", none.unwrap()); // Panics!
    // println!("{}", err.unwrap());  // Panics!
    println!("{}", some.unwrap()); // 10
    println!("{}", ok.expect("No value found!")); // 5

    // Safe alternatives
    println!("{}", none.unwrap_or(0)); // 0
    println!("{}", err.unwrap_or(-1)); // -1
    println!("{}", none.unwrap_or_else(|| 42)); // 42
    println!("{}", ok.unwrap_or_else(|_| 99)); // 5

    // Safe handling with match
    match none {
        Some(v) => println!("Value: {}", v),
        None => println!("No value"),
    }
    match err {
        Ok(v) => println!("Result: {}", v),
        Err(e) => println!("Error: {}", e),
    }
}
```
