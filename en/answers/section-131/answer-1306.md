## 📘 Section: Plugin Systems Advanced Topics  
### 🔹 Category: Plugin Lifecycle Management  
#### ✅ Answer 1306: Plugin lifecycle management

A plugin lifecycle includes initialization, running, and shutdown phases. In Rust, you can define `init` and `shutdown` methods in a trait to manage these phases.

```rust
trait Plugin {
    fn init(&mut self) { println!("Plugin initialized"); }
    fn run(&self);
    fn shutdown(&mut self) { println!("Plugin shutdown"); }
}

struct LoggerPlugin;

impl Plugin for LoggerPlugin {
    fn run(&self) {
        println!("Logger running");
    }
}

fn main() {
    let mut plugin = LoggerPlugin;
    plugin.init();
    plugin.run();
    plugin.shutdown();
}
```
