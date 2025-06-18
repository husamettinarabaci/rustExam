## 📘 Section: Plugin System Testing and Maintenance  
### 🔹 Category: Plugin System Testing and Maintenance  
#### ✅ Answer 1401: Writing unit tests for plugins

Unit tests for plugin functions check if the function produces the expected output. In Rust, tests are written using `#[cfg(test)]` and `#[test]`.

```rust
pub fn plugin_add(a: i32, b: i32) -> i32 {
    a + b
}

#[cfg(test)]
mod tests {
    use super::*;
    #[test]
    fn test_plugin_add() {
        assert_eq!(plugin_add(2, 3), 5);
    }
}
```
Tests ensure code correctness and reliability.
