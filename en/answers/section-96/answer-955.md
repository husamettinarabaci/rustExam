## 📘 Section: Advanced Testing and Formal Verification  
### 🔹 Category: Combining Testing and Formal Methods  
#### ✅ Answer 955: Combining testing and formal methods

In Rust, unit tests ensure correctness for specific inputs, while property-based tests verify general properties. Below is an example using both approaches together.

```rust
fn abs(x: i32) -> i32 {
    if x < 0 { -x } else { x }
}

#[cfg(test)]
mod tests {
    use super::*;
    #[test]
    fn test_abs_unit() {
        assert_eq!(abs(5), 5);
        assert_eq!(abs(-5), 5);
    }
    #[quickcheck]
    fn prop_abs_nonnegative(x: i32) -> bool {
        abs(x) >= 0
    }
}
```
This approach provides both specific and general correctness guarantees.
