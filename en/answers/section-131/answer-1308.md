## 📘 Section: Plugin Systems Advanced Topics  
### 🔹 Category: Plugin Configuration and Dependency Injection  
#### ✅ Answer 1308: Plugin configuration and dependency injection

Configuration and dependency injection make plugins flexible and testable. In Rust, you can provide dependencies and settings via struct fields.

```rust
struct Config {
    debug: bool,
}

struct Logger {
    config: Config,
}

impl Logger {
    fn log(&self, msg: &str) {
        if self.config.debug {
            println!("[DEBUG] {}", msg);
        } else {
            println!("{}", msg);
        }
    }
}

fn main() {
    let config = Config { debug: true };
    let logger = Logger { config };
    logger.log("Hello, plugin!");
}
```
