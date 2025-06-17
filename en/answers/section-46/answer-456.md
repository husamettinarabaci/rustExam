## 📘 Section: Testing and Debugging  
### 🔹 Category: Integration Tests  
#### ✅ Answer 456: Writing integration tests in the `tests/` directory

Integration tests are written in separate files in the `tests/` directory and test the public API of your crate.

```rust
// tests/integration_test.rs
dependency_crate::some_function();

#[test]
fn test_public_api() {
    assert_eq!(dependency_crate::add(2, 2), 4);
}
```

In the terminal:

```
cargo test
```
