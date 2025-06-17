## 📘 Section: Testing and Debugging  
### 🔹 Category: Mocking Dependencies  
#### ✅ Answer 457: Mocking dependencies and isolating logic

Mock functions help isolate dependencies so tests only check the intended logic. In Rust, this is often done by injecting dependencies as function parameters.

```rust
fn process<F: Fn(i32) -> i32>(f: F, x: i32) -> i32 {
    f(x) + 1
}

#[cfg(test)]
mod tests {
    use super::*;
    #[test]
    fn test_with_mock() {
        let mock = |x| x * 2;
        assert_eq!(process(mock, 3), 7);
    }
}
```
