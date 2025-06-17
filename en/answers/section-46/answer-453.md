## 📘 Section: Testing and Debugging  
### 🔹 Category: Assertion Macros  
#### ✅ Answer 453: Using `assert_eq!`, `assert!`, and `assert_ne!`

`assert_eq!` checks for equality, `assert!` checks a condition, and `assert_ne!` checks for inequality between values.

```rust
#[cfg(test)]
mod tests {
    #[test]
    fn test_assert_macros() {
        assert_eq!(2 + 2, 4); // Equality test
        assert!(3 > 1);       // Condition test
        assert_ne!(5, 10);    // Inequality test
    }
}
```
