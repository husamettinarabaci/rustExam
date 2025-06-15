## 📘 Section: Option and Result Types  
### 🔹 Category: Result Type and Error Handling  
#### ✅ Answer 183: Using Result for error handling

This example demonstrates how to use the `Result` type for error handling in Rust. The function tries to parse a string as an integer and returns a `Result<i32, std::num::ParseIntError>`. The caller matches on the result to handle both success and error cases.

```rust
fn parse_number(s: &str) -> Result<i32, std::num::ParseIntError> {
    s.parse::<i32>()
}

fn main() {
    let inputs = ["42", "abc"];
    for input in &inputs {
        match parse_number(input) {
            Ok(n) => println!("Parsed number: {}", n),
            Err(e) => println!("Failed to parse '{}': {}", input, e),
        }
    }
}
```

- If the string can be parsed, it prints the number.
- If parsing fails, it prints an error message.
