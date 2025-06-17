## 📘 Section: Testing and Debugging  
### 🔹 Category: Unit Tests  
#### ✅ Answer 341: Writing unit tests with `#[test]`

This example defines a function that adds two numbers and a unit test module. The test function is marked with `#[test]` and uses `assert_eq!` to check the expected result.

```rust
fn add(a: i32, b: i32) -> i32 {
    a + b
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_add() {
        assert_eq!(add(2, 3), 5);
        assert_eq!(add(-1, 1), 0);
    }
}
```
