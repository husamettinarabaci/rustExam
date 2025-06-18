## 📘 Section: Async Networking and IO  
### 🔹 Category: Implementing custom protocols asynchronously  
#### ✅ Answer 1099: Implementing custom protocols asynchronously

This example shows a simple server using Tokio that asynchronously handles a custom text-based protocol over TCP. The server reads each message from a connection and replies with "OK: <message>".

```rust
use tokio::net::TcpListener;
use tokio::io::{AsyncBufReadExt, AsyncWriteExt, BufReader};

#[tokio::main]
async fn main() -> std::io::Result<()> {
    let listener = TcpListener::bind("127.0.0.1:8080").await?;
    loop {
        let (socket, _) = listener.accept().await?;
        tokio::spawn(async move {
            let (reader, mut writer) = socket.into_split();
            let mut reader = BufReader::new(reader);
            let mut line = String::new();
            while reader.read_line(&mut line).await.unwrap_or(0) > 0 {
                writer.write_all(format!("OK: {}", line).as_bytes()).await.ok();
                line.clear();
            }
        });
    }
}
```
