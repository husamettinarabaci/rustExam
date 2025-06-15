## 📘 Section: Error Handling
### 🔹 Category: Error handling in libraries
#### ✅ Answer 197: Error handling in libraries

In Rust libraries, functions should return a `Result` type to allow callers to handle errors. This enables ergonomic error propagation and clear error documentation. Below is an example of a library function that parses a string to an integer and returns a `Result`.

```rust
/// Parses a string into an i32. Returns an error if parsing fails.
pub fn parse_number(input: &str) -> Result<i32, std::num::ParseIntError> {
    input.trim().parse::<i32>()
}

fn main() {
    match parse_number("42a") {
        Ok(n) => println!("Parsed number: {}", n),
        Err(e) => eprintln!("Error parsing number: {}", e),
    }
}
```

This approach allows the library user to handle errors as they see fit, using pattern matching or the `?` operator in their own code.
