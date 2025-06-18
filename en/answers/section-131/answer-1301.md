## 📘 Section: Plugin Systems Advanced Topics  
### 🔹 Category: Dynamic Trait Objects in Plugin APIs  
#### ✅ Answer 1301: Dynamic trait objects in plugin APIs

Dynamic trait objects (`dyn Trait`) allow plugin APIs to accept any type implementing a common interface at runtime. This enables flexible plugin architectures where the main application can interact with plugins through a shared trait, using dynamic dispatch.

```rust
trait Plugin {
    fn name(&self) -> &str;
    fn run(&self);
}

struct LoggerPlugin;
impl Plugin for LoggerPlugin {
    fn name(&self) -> &str { "Logger" }
    fn run(&self) { println!("Logging..."); }
}

fn execute_plugin(plugin: &dyn Plugin) {
    println!("Running plugin: {}", plugin.name());
    plugin.run();
}

fn main() {
    let logger = LoggerPlugin;
    execute_plugin(&logger);
}
```
