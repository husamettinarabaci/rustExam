## 📘 Section: Testing and Debugging
### 🔹 Category: Mocking and Dependency Injection in Tests
#### ✅ Answer 843: Mocking dependencies and injection in tests

In Rust, you can mock external dependencies in unit tests using trait-based abstraction and mock objects. This allows you to test logic without relying on real databases or filesystems.

```rust
trait DataSource {
    fn get_data(&self) -> i32;
}

struct RealSource;
impl DataSource for RealSource {
    fn get_data(&self) -> i32 { 42 }
}

struct MockSource;
impl DataSource for MockSource {
    fn get_data(&self) -> i32 { 7 }
}

fn process(source: &dyn DataSource) -> i32 {
    source.get_data() * 2
}

#[test]
fn test_process_with_mock() {
    let mock = MockSource;
    assert_eq!(process(&mock), 14);
}
```

Here, a mock object is used in the test instead of a real dependency.
