## 📘 Section: Smart Pointers and Resource Management  
### 🔹 Category: RAII and Drop  
#### ✅ Answer 440: Understanding RAII and destructor behavior with `Drop`

RAII in Rust means resources are acquired and released with object lifetime. The `Drop` trait lets you run code when a value goes out of scope, enabling automatic cleanup.

```rust
struct Resource;

impl Drop for Resource {
    fn drop(&mut self) {
        println!("Resource released!");
    }
}

fn main() {
    let _r = Resource;
    println!("Resource acquired!");
} // "Resource released!" is printed here
```
