## 📘 Section: Testing and Debugging  
### 🔹 Category: Running Tests  
#### ✅ Answer 455: Running tests with `cargo test` and using filters and flags

`cargo test` runs all tests. You can filter by test name or use flags for more output.

```rust
#[cfg(test)]
mod tests {
    #[test]
    fn test_one() {
        assert_eq!(1 + 1, 2);
    }
    #[test]
    fn test_two() {
        assert!(true);
    }
}
```

In the terminal:

```
cargo test           # Runs all tests
cargo test test_one  # Runs only the test_one function
cargo test -- --nocapture  # Shows test output
```
