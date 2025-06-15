## 📘 Section: Error Handling
### 🔹 Category: Error handling with if let
#### ✅ Answer 199: Error handling with if let

In Rust, you can use the `if let` statement to handle the `Ok` variant of a `Result` and provide a fallback for errors. Here is an example that parses a string to an integer:

```rust
fn parse_number(input: &str) -> Result<i32, std::num::ParseIntError> {
    input.trim().parse::<i32>()
}

fn main() {
    let input = "123a";
    if let Ok(n) = parse_number(input) {
        println!("Parsed number: {}", n);
    } else {
        eprintln!("Failed to parse number.");
    }
}
```

This approach is concise when you only care about the success case.
