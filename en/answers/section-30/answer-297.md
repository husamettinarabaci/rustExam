## 📘 Section: Modules and Crate Structure  
### 🔹 Category: Module Tests and Organization  
#### ✅ Answer 297: Organizing tests in module trees

In Rust, tests are typically placed at the end of each module using `#[cfg(test)]` and a `mod tests` block. This ensures tests are only included in test builds and are organized according to the module hierarchy. Each module can have its own tests, and submodules can define their own test modules as well.

```rust
// src/lib.rs
pub mod math {
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

pub mod string_utils {
    pub fn to_upper(s: &str) -> String {
        s.to_uppercase()
    }
    #[cfg(test)]
    mod tests {
        use super::*;
        #[test]
        fn test_to_upper() {
            assert_eq!(to_upper("rust"), "RUST");
        }
    }
}
```

In this example, each module contains its own test module, and tests are only compiled and run with `cargo test`.
