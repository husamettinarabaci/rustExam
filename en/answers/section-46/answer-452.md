## 📘 Section: Testing and Debugging  
### 🔹 Category: Test Modules  
#### ✅ Answer 452: Grouping tests with `mod tests` and `cfg(test)`

Tests are typically grouped in a `mod tests` and enabled only during test builds with `#[cfg(test)]`. This separates production and test code.

```rust
fn multiply(a: i32, b: i32) -> i32 {
    a * b
}

#[cfg(test)]
mod tests {
    use super::*;
    #[test]
    fn test_multiply() {
        assert_eq!(multiply(4, 5), 20);
    }
}
```
