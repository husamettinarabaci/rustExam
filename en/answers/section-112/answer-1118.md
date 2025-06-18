## 📘 Section: Async Resource Management  
### 🔹 Category: Async Resource Management  
#### ✅ Answer 1118: Implementing async RAII patterns

This example manages an async resource with a struct. When the struct is dropped, the resource is automatically closed, ensuring safe async resource management.

```rust
use tokio::fs::File;
use std::ops::Deref;

struct AsyncFile(File);

impl Deref for AsyncFile {
    type Target = File;
    fn deref(&self) -> &Self::Target { &self.0 }
}

impl Drop for AsyncFile {
    fn drop(&mut self) {
        println!("AsyncFile resource is being closed.");
        // File is closed automatically
    }
}

#[tokio::main]
async fn main() {
    let file = File::open("test.txt").await.unwrap();
    let _async_file = AsyncFile(file);
    // _async_file is dropped and resource is closed
}
```
