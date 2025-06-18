## 📘 Section: Plugin Systems Advanced Topics  
### 🔹 Category: Writing Cross-Platform Plugins  
#### ✅ Answer 1305: Writing cross-platform plugins

Cross-platform plugin development ensures plugins work seamlessly on different operating systems. In Rust, you can use conditional compilation (`cfg` attribute) for platform-specific code.

```rust
trait Plugin {
    fn info(&self) -> String;
}

struct OsPlugin;

impl Plugin for OsPlugin {
    fn info(&self) -> String {
        #[cfg(target_os = "windows")]
        { "Windows plugin".to_string() }
        #[cfg(target_os = "linux")]
        { "Linux plugin".to_string() }
        #[cfg(target_os = "macos")]
        { "macOS plugin".to_string() }
    }
}

fn main() {
    let plugin = OsPlugin;
    println!("{}", plugin.info());
}
```
