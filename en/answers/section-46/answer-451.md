## 📘 Section: Testing and Debugging  
### 🔹 Category: Unit Tests  
#### ✅ Answer 451: Writing unit tests with `#[test]`

Unit tests in Rust are defined with the `#[test]` attribute. Test functions are usually placed in a `tests` module and use macros like `assert_eq!` for validation.

```rust
fn add(a: i32, b: i32) -> i32 {
    a + b
}

#[cfg(test)]
mod tests {
    use super::*;
    #[test]
    fn test_add() {
        assert_eq!(add(2, 3), 5);
    }
}
```
