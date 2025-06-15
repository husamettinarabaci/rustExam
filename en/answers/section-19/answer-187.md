## 📘 Section: Option and Result Types  
### 🔹 Category: Unwrapping and Default Values  
#### ✅ Answer 187: Using `unwrap_or` and `unwrap_or_else`

This example demonstrates how to use `unwrap_or` and `unwrap_or_else` with `Option` and `Result` in Rust. The function takes an `Option<&str>`, tries to parse it as an integer, and provides default values if needed.

```rust
fn parse_or_default(input: Option<&str>) -> i32 {
    input
        .unwrap_or("0")
        .parse::<i32>()
        .unwrap_or_else(|_| -1)
}

fn main() {
    let inputs = [Some("42"), Some("abc"), None];
    for input in &inputs {
        let result = parse_or_default(*input);
        println!("Input: {:?} => Result: {}", input, result);
    }
}
```

- `unwrap_or` provides a default string if the option is `None`.
- `unwrap_or_else` provides a default integer if parsing fails.
