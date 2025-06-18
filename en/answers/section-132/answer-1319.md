## 📘 Section: Embedded DSLs: Parsing and Compilation
### 🔹 Category: Testing Embedded DSLs
#### ✅ Answer 1319: Testing embedded DSLs

This example shows unit tests for a DSL parser function.

```rust
fn parse_dsl(input: &str) -> Result<Vec<&str>, String> {
    if input.trim().is_empty() {
        return Err("Empty expression".to_string());
    }
    Ok(input.split_whitespace().collect())
}

#[cfg(test)]
mod tests {
    use super::*;
    #[test]
    fn test_valid() {
        assert_eq!(parse_dsl("add 1 2").is_ok(), true);
    }
    #[test]
    fn test_invalid() {
        assert_eq!(parse_dsl("").is_err(), true);
    }
}
```
