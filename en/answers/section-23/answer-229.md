## 📘 Section: Generics II  
### 🔹 Category: Generic type aliases  
#### ✅ Answer 229: Defining and using generic type aliases

This example demonstrates how to define and use a generic type alias in Rust. The `ResultString<T>` alias simplifies function signatures that return `Result<T, String>`. The `parse_number` function uses this alias to return either a parsed `i32` or an error message.

```rust
type ResultString<T> = Result<T, String>;

fn parse_number(s: &str) -> ResultString<i32> {
    s.parse::<i32>().map_err(|e| format!("Parse error: {}", e))
}

fn main() {
    match parse_number("42") {
        Ok(n) => println!("Parsed number: {}", n),
        Err(e) => println!("Error: {}", e),
    }
    match parse_number("not a number") {
        Ok(n) => println!("Parsed number: {}", n),
        Err(e) => println!("Error: {}", e),
    }
}
```
