## 📘 Section: Async Resource Management  
### 🔹 Category: Async Resource Management  
#### ✅ Answer 1119: Avoiding resource leaks in async code

This example shows how to ensure resources are closed in async tasks. If a resource is not properly managed, it may leak.

```rust
use tokio::fs::File;

async fn open_file_leak() {
    let _file = File::open("test.txt").await.unwrap();
    // If _file is not used or dropped, the file may remain open (leak)
}

async fn open_file_proper() {
    let file = File::open("test.txt").await.unwrap();
    // Use the file
    drop(file); // Explicitly close the file
}

#[tokio::main]
async fn main() {
    open_file_leak().await;   // Risk of leak
    open_file_proper().await; // Proper management
}
```
