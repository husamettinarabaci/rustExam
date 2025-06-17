## 📘 Section: Project Design and Refactoring  
### 🔹 Category: Separation of Concerns with Clear Interfaces  
#### ✅ Answer 497: Ensuring separation of concerns with clear interfaces

In Rust, separation of concerns is achieved using traits and modules. Each trait or module should have a single responsibility, and interfaces should be clearly defined.

```rust
trait Logger {
    fn log(&self, message: &str);
}

struct ConsoleLogger;

impl Logger for ConsoleLogger {
    fn log(&self, message: &str) {
        println!("[LOG]: {}", message);
    }
}

fn main() {
    let logger = ConsoleLogger;
    logger.log("Hello, world!");
}
```
