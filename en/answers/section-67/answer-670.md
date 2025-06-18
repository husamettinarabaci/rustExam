## 📘 Section: Domain-Driven Design in Rust
### 🔹 Category: Testing Domain Logic in Isolation
#### ✅ Answer 670: Testing domain logic in isolation

Testing domain logic in isolation means writing unit tests for your business logic without external dependencies. In Rust, you can use the built-in test framework to test functions and methods.

```rust
struct Calculator;

impl Calculator {
    fn add(a: i32, b: i32) -> i32 {
        a + b
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    #[test]
    fn test_add() {
        assert_eq!(Calculator::add(2, 3), 5);
    }
}
```
