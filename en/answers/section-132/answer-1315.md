## 📘 Section: Embedded DSLs: Parsing and Compilation
### 🔹 Category: Error Recovery and Reporting
#### ✅ Answer 1315: Error recovery and reporting

This example shows a function that returns a meaningful error message if the DSL expression is invalid.

```rust
fn parse_dsl(input: &str) -> Result<Vec<&str>, String> {
    if input.trim().is_empty() {
        return Err("DSL expression cannot be empty".to_string());
    }
    let tokens: Vec<&str> = input.split_whitespace().collect();
    if tokens.len() < 3 {
        return Err("Missing argument: expected at least 3 tokens".to_string());
    }
    Ok(tokens)
}

fn main() {
    match parse_dsl("") {
        Ok(tokens) => println!("{:?}", tokens),
        Err(e) => println!("Error: {}", e),
    }
    match parse_dsl("add 1 2") {
        Ok(tokens) => println!("{:?}", tokens),
        Err(e) => println!("Error: {}", e),
    }
}
```
