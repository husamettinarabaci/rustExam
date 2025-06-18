## 📘 Section: Plugin System Testing and Maintenance  
### 🔹 Category: Plugin System Testing and Maintenance  
#### ✅ Answer 1402: Integration testing with host applications

Integration tests check if the plugin and host application work correctly together. In Rust, integration tests are written in separate files under the `tests/` directory.

```rust
// src/lib.rs
your_plugin_function();

// tests/integration_test.rs
use your_crate::your_plugin_function;

#[test]
fn test_plugin_integration() {
    assert_eq!(your_plugin_function(), expected_value);
}
```
Integration tests ensure that all parts of the system work together as expected.
