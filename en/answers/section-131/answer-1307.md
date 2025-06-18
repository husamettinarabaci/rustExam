## 📘 Section: Plugin Systems Advanced Topics  
### 🔹 Category: Extending Plugins with Custom Metadata  
#### ✅ Answer 1307: Extending plugins with custom metadata

Metadata makes it easier to identify and manage plugins. In Rust, you can add fields to the plugin struct to store metadata.

```rust
trait Plugin {
    fn name(&self) -> &str;
    fn metadata(&self) -> &PluginMetadata;
}

struct PluginMetadata {
    author: String,
    version: String,
}

struct MyPlugin {
    meta: PluginMetadata,
}

impl Plugin for MyPlugin {
    fn name(&self) -> &str { "MyPlugin" }
    fn metadata(&self) -> &PluginMetadata { &self.meta }
}

fn main() {
    let plugin = MyPlugin {
        meta: PluginMetadata { author: "Alice".into(), version: "1.0".into() },
    };
    println!("{} by {} (v{})", plugin.name(), plugin.metadata().author, plugin.metadata().version);
}
```
