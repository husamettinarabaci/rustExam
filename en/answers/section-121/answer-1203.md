## 📘 Section: Advanced Async I/O and Networking  
### 🔹 Category: Async File System Operations  
#### ✅ Answer 1203: Async file system operations and streaming

Async file operations allow I/O to be performed without blocking, which is important for high-performance applications. In Rust, you can use `tokio::fs` to read and write files asynchronously.

```rust
use tokio::fs::File;
use tokio::io::{self, AsyncReadExt};

#[tokio::main]
async fn main() -> io::Result<()> {
    let mut file = File::open("data.txt").await?;
    let mut contents = String::new();
    file.read_to_string(&mut contents).await?;
    println!("File contents: {}", contents);
    Ok(())
}
```

This example reads a file asynchronously using `tokio::fs::File` and prints its contents.
