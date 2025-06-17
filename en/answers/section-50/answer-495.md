## 📘 Section: Project Design and Refactoring  
### 🔹 Category: Meaningful Tests for Each Module  
#### ✅ Answer 495: Adding meaningful tests for each module

Writing separate tests for each module in Rust increases code reliability. Tests are defined using `#[cfg(test)]` and `#[test]` and should validate the module's functionality.

```rust
pub fn add(a: i32, b: i32) -> i32 {
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
