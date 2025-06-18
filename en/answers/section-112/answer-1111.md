## 📘 Section: Async Resource Management  
### 🔹 Category: Managing lifetimes of async resources  
#### ✅ Answer 1111: Managing lifetimes of async resources

In this solution, the resource is automatically closed at the end of the async function, and a message is printed to indicate this.

```rust
use tokio::fs::File;

async fn open_and_close_file() {
    let _file = File::open("foo.txt").await.unwrap();
    // _file can be used here
    // At the end of the function, _file is closed
    println!("Resource automatically closed.");
}
```
