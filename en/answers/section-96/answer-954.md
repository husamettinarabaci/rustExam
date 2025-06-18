## 📘 Section: Advanced Testing and Formal Verification  
### 🔹 Category: Proof Concept for Verification Tests  
#### ✅ Answer 954: Proof concept for verification tests

In Rust, unit tests can be used to prove that a function satisfies a specific property. For example, you can test that a multiplication function always returns zero when multiplied by zero.

```rust
fn mul(a: i32, b: i32) -> i32 {
    a * b
}

#[cfg(test)]
mod tests {
    use super::*;
    #[test]
    fn test_mul_zero_property() {
        // Proof: For any a, mul(a, 0) == 0
        assert_eq!(mul(5, 0), 0);
        assert_eq!(mul(-3, 0), 0);
    }
}
```
Proof-based tests ensure that code upholds certain mathematical properties.
