## 📘 Section: Plugin System Testing and Maintenance  
### 🔹 Category: Mocking Plugin Dependencies  
#### ✅ Answer 1403: Mocking plugin dependencies in tests

Using mock objects instead of real dependencies allows you to test plugin code in isolation. Typically, dependencies are abstracted via a trait, and a mock implementation is used in the test.

```rust
trait Logger {
    fn log(&self, msg: &str);
}

struct Plugin<'a> {
    logger: &'a dyn Logger,
}

impl<'a> Plugin<'a> {
    fn do_work(&self) {
        self.logger.log("Working");
    }
}

struct MockLogger {
    pub called: std::cell::Cell<bool>,
}

impl Logger for MockLogger {
    fn log(&self, _msg: &str) {
        self.called.set(true);
    }
}

#[test]
fn test_plugin_with_mock_logger() {
    let mock = MockLogger { called: std::cell::Cell::new(false) };
    let plugin = Plugin { logger: &mock };
    plugin.do_work();
    assert!(mock.called.get());
}
```
