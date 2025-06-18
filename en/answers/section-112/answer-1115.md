## 📘 Section: Async Resource Management  
### 🔹 Category: Async Resource Management  
#### ✅ Answer 1115: Managing file handles and sockets asynchronously

This example uses `tokio` to asynchronously open a file, read its contents, and then create a TCP socket to send data. Both resources are managed and closed automatically.

```rust
use tokio::fs::File;
use tokio::io::{AsyncReadExt, AsyncWriteExt};
use tokio::net::TcpStream;

#[tokio::main]
async fn main() -> std::io::Result<()> {
    // Open and read file asynchronously
    let mut file = File::open("test.txt").await?;
    let mut contents = String::new();
    file.read_to_string(&mut contents).await?;
    println!("File contents: {}", contents);

    // Create TCP socket and send data asynchronously
    let mut stream = TcpStream::connect("127.0.0.1:8080").await?;
    stream.write_all(b"Hello async socket!").await?;
    // Resources are closed automatically
    Ok(())
}
```
