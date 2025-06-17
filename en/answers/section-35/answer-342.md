## 📘 Section: Testing and Debugging  
### 🔹 Category: Using assert_eq!, assert_ne!, and assert! macros  
#### ✅ Answer 342: Validation with assert_eq!, assert_ne!, and assert! macros

In Rust unit tests, the `assert_eq!`, `assert_ne!`, and `assert!` macros are used to verify that functions produce the expected results. `assert_eq!` checks for equality, `assert_ne!` checks for inequality, and `assert!` checks that a condition is true.

```rust
fn sum(a: i32, b: i32) -> i32 {
    a + b
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_sum_eq() {
        assert_eq!(sum(2, 3), 5);
    }

    #[test]
    fn test_sum_ne() {
        assert_ne!(sum(2, 2), 5);
    }

    #[test]
    fn test_sum_positive() {
        assert!(sum(1, 1) > 0);
    }
}
```
