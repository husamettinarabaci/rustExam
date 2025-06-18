## 📘 Section: Async Networking and IO
### 🔹 Category: Connection pooling and multiplexing
#### ✅ Answer 1098: Connection pooling and multiplexing

This example uses Tokio to manage multiple TCP connections asynchronously, sending data to each server and collecting responses.

```rust
use tokio::net::TcpStream;
use tokio::io::{AsyncReadExt, AsyncWriteExt};

#[tokio::main]
async fn main() {
    let servers = vec!["127.0.0.1:8001", "127.0.0.1:8002"];
    let mut handles = vec![];
    for addr in servers {
        let handle = tokio::spawn(async move {
            let mut stream = TcpStream::connect(addr).await.unwrap();
            stream.write_all(b"Hello!").await.unwrap();
            let mut buf = [0; 1024];
            let n = stream.read(&mut buf).await.unwrap();
            println!("{} response: {}", addr, String::from_utf8_lossy(&buf[..n]));
        });
        handles.push(handle);
    }
    for h in handles { h.await.unwrap(); }
}
```
