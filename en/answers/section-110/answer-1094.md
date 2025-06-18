## 📘 Section: Async Networking and IO
### 🔹 Category: Network programming with `tokio::net`
#### ✅ Answer 1094: Network programming with `tokio::net`

This example shows how to use `tokio::net` to create a TCP server that accepts multiple clients concurrently. Each connection is handled in a separate async task.

```rust
use tokio::net::TcpListener;
use tokio::io::{AsyncReadExt, AsyncWriteExt};

#[tokio::main]
async fn main() {
    let listener = TcpListener::bind("127.0.0.1:8081").await.unwrap();
    loop {
        let (mut socket, addr) = listener.accept().await.unwrap();
        tokio::spawn(async move {
            let mut buf = [0; 1024];
            let n = socket.read(&mut buf).await.unwrap();
            println!("{}: {}", addr, String::from_utf8_lossy(&buf[..n]));
            socket.write_all(b"Hello, client!").await.unwrap();
        });
    }
}
```
