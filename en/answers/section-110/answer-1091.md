## 📘 Section: Async Networking and IO
### 🔹 Category: Async TCP and UDP Communication
#### ✅ Answer 1091: Async TCP and UDP communication

This example demonstrates a simple TCP server and client using Tokio. The server reads a message from the client and sends a response. The client sends a message and prints the server's reply.

```rust
// Server
use tokio::net::TcpListener;
use tokio::io::{AsyncReadExt, AsyncWriteExt};

#[tokio::main]
async fn main() {
    let listener = TcpListener::bind("127.0.0.1:8080").await.unwrap();
    let (mut socket, _) = listener.accept().await.unwrap();
    let mut buf = [0; 1024];
    let n = socket.read(&mut buf).await.unwrap();
    println!("Received: {}", String::from_utf8_lossy(&buf[..n]));
    socket.write_all(b"Hello, client!").await.unwrap();
}
```

```rust
// Client
use tokio::net::TcpStream;
use tokio::io::{AsyncReadExt, AsyncWriteExt};

#[tokio::main]
async fn main() {
    let mut stream = TcpStream::connect("127.0.0.1:8080").await.unwrap();
    stream.write_all(b"Hello, server!").await.unwrap();
    let mut buf = [0; 1024];
    let n = stream.read(&mut buf).await.unwrap();
    println!("From server: {}", String::from_utf8_lossy(&buf[..n]));
}
```
