## 📘 Section: Error Handling
### 🔹 Category: Error handling with unwrap_or
#### ✅ Answer 200: Error handling with unwrap_or

In Rust, the `unwrap_or` method on `Result` allows you to provide a default value if an error occurs. This is useful for simple fallback logic. Here is an example that parses a string to an integer:

```rust
fn parse_number(input: &str) -> Result<i32, std::num::ParseIntError> {
    input.trim().parse::<i32>()
}

fn main() {
    let input = "not_a_number";
    let number = parse_number(input).unwrap_or(0);
    println!("Result: {}", number); // Prints 0 if parsing fails
}
```

This approach is concise and useful when you want a default value in case of error.
