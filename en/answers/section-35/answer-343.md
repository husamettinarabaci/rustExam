## 📘 Section: Testing and Debugging  
### 🔹 Category: Test Modules and Organization  
#### ✅ Answer 343: Organizing test modules in your crate

In Rust, you can keep your test code separate from your main code by using a `mod tests` module annotated with `#[cfg(test)]`. This module is only included when running tests and can contain multiple test functions, helping you keep your tests organized.

```rust
// Main code
pub fn add(a: i32, b: i32) -> i32 {
    a + b
}

// Test module
#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_add_positive() {
        assert_eq!(add(2, 3), 5);
    }

    #[test]
    fn test_add_negative() {
        assert_eq!(add(-2, -3), -5);
    }
}
```
