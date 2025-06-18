## 📘 Section: Embedded DSLs: Parsing and Compilation
### 🔹 Category: Semantic Analysis in DSLs
#### ✅ Answer 1314: Semantic analysis in DSLs

This example shows a simple function that checks the tokens of a DSL expression and returns an error message if invalid.

```rust
fn semantic_check(tokens: &[&str]) -> Result<(), String> {
    if tokens.is_empty() {
        return Err("Empty expression".to_string());
    }
    if tokens[0] != "add" && tokens[0] != "mul" {
        return Err("Unknown operation".to_string());
    }
    Ok(())
}

fn main() {
    let tokens = vec!["add", "1", "2"];
    match semantic_check(&tokens) {
        Ok(()) => println!("Valid DSL expression"),
        Err(e) => println!("Error: {}", e),
    }
}
```
