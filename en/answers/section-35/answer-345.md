## 📘 Section: Testing and Debugging  
### 🔹 Category: Integration Tests  
#### ✅ Answer 345: Writing integration tests in the `tests/` directory

In Rust, integration tests are placed in the `tests/` directory at the project root. Each file in this directory is compiled as a separate crate and can access your library's public API as an external user would.

Here is an example integration test:

```rust
// tests/integration_test.rs
use my_crate::add;

#[test]
fn test_add() {
    assert_eq!(add(2, 3), 5);
}
```

This test imports the `add` function from your main library crate (`my_crate`) and checks its output. The test function is marked with `#[test]` and uses `assert_eq!` for validation.
