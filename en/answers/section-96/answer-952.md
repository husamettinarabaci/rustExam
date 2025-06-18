## 📘 Section: Advanced Testing and Formal Verification  
### 🔹 Category: Formal Specification and Verification  
#### ✅ Answer 952: Formal specification of Rust programs

A formal specification clearly defines what a function should do mathematically. For example, for an addition function, the property `add(a, b) = a + b` is specified. This property can be verified with tests.

```rust
// add function: add(a, b) = a + b
fn add(a: i32, b: i32) -> i32 {
    a + b
}

#[cfg(test)]
mod tests {
    use super::*;
    #[test]
    fn test_add_spec() {
        // Formal specification: add(a, b) == a + b
        assert_eq!(add(2, 3), 5);
        assert_eq!(add(-1, 1), 0);
    }
}
```
