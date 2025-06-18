## 📘 Section: Plugin Systems Advanced Topics  
### 🔹 Category: Versioning and Compatibility of Plugin Interfaces  
#### ✅ Answer 1302: Versioning and compatibility of plugin interfaces

Versioning in plugin APIs is crucial to maintain compatibility between the host application and plugins. In Rust, you can add a version field or use default trait methods to handle compatibility.

```rust
trait Plugin {
    fn version(&self) -> u32 { 1 }
    fn name(&self) -> &str;
}

struct OldPlugin;
impl Plugin for OldPlugin {
    fn name(&self) -> &str { "Old" }
}

struct NewPlugin;
impl Plugin for NewPlugin {
    fn version(&self) -> u32 { 2 }
    fn name(&self) -> &str { "New" }
}

fn load_plugin(plugin: &dyn Plugin) {
    println!("Plugin: {} (v{})", plugin.name(), plugin.version());
}

fn main() {
    let old = OldPlugin;
    let new = NewPlugin;
    load_plugin(&old);
    load_plugin(&new);
}
```
