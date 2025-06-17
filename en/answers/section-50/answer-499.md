## 📘 Section: Project Design and Refactoring  
### 🔹 Category: Refactoring Legacy Code with Safety and Confidence  
#### ✅ Answer 499: Refactoring legacy code with safety and confidence

During refactoring, proceed in small steps, running tests and compiling at each stage to ensure functionality is preserved. This improves code readability and maintainability.

```rust
// Legacy code
fn sum(a: i32, b: i32) -> i32 {
    a + b
}

// Refactored code
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
