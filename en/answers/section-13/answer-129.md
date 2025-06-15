## 📘 Section: Modules I  
### 🔹 Category: Module Tests  
#### ✅ Answer 129: Module tests

Rust modules can include their own tests using the `#[cfg(test)]` attribute. Test modules are usually placed inside the same file and use the `#[test]` attribute for test functions. This helps keep code and tests organized together.

```rust
mod math {
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
}
```
