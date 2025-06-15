## 📘 Section: Structs II  
### 🔹 Category: Method with default implementation  
#### ✅ Answer 97: Method with default implementation

The `Default` trait in Rust allows you to provide default values for a struct. Here, we define a `Config` struct, implement `Default` for it, and add a `describe` method that prints its values.

```rust
struct Config {
    debug: bool,
    max_connections: u32,
}

impl Default for Config {
    fn default() -> Self {
        Self {
            debug: false,
            max_connections: 100,
        }
    }
}

impl Config {
    fn describe(&self) {
        println!("Debug: {}, Max connections: {}", self.debug, self.max_connections);
    }
}

fn main() {
    let cfg = Config::default();
    cfg.describe();
}
```
