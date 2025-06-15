## 📘 Section: Option and Result Types  
### 🔹 Category: Method Chaining  
#### ✅ Answer 186: Chaining Option and Result methods

This example demonstrates how to chain `Option` and `Result` methods in Rust. The function takes an `Option<&str>`, converts it to a `Result`, and then parses it as an integer using method chaining.

```rust
fn parse_optional_number(input: Option<&str>) -> Result<i32, String> {
    input
        .ok_or("No value provided".to_string())
        .and_then(|s| s.parse::<i32>().map_err(|e| e.to_string()))
}

fn main() {
    let inputs = [Some("42"), Some("abc"), None];
    for input in &inputs {
        match parse_optional_number(*input) {
            Ok(n) => println!("Parsed: {}", n),
            Err(e) => println!("Error: {}", e),
        }
    }
}
```

- `ok_or` converts `Option` to `Result`.
- `and_then` and `map_err` are used to chain further processing and error handling.
