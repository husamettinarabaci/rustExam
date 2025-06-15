## 📘 Section: Error Handling
### 🔹 Category: Error handling with match
#### ✅ Answer 198: Error handling with match

In Rust, you can use the `match` statement to handle the `Result` type returned from functions. This allows you to explicitly handle both success (`Ok`) and error (`Err`) cases. Here is an example that parses a string to an integer:

```rust
fn parse_number(input: &str) -> Result<i32, std::num::ParseIntError> {
    input.trim().parse::<i32>()
}

fn main() {
    let input = "abc";
    match parse_number(input) {
        Ok(n) => println!("Parsed number: {}", n),
        Err(e) => eprintln!("Failed to parse number: {}", e),
    }
}
```

This approach makes error handling explicit and clear.
