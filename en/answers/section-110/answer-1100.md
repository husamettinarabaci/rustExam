## 📘 Section: Async Networking and IO  
### 🔹 Category: Testing async network code  
#### ✅ Answer 1100: Testing async network code

This example shows a unit test for async TCP server and client functions using Tokio's test support. The client sends "ping" and expects to receive "pong" from the server.

```rust
use tokio::net::{TcpListener, TcpStream};
use tokio::io::{AsyncReadExt, AsyncWriteExt};

async fn start_server() {
    let listener = TcpListener::bind("127.0.0.1:9000").await.unwrap();
    tokio::spawn(async move {
        let (mut socket, _) = listener.accept().await.unwrap();
        let mut buf = [0u8; 4];
        socket.read_exact(&mut buf).await.unwrap();
        if &buf == b"ping" {
            socket.write_all(b"pong").await.unwrap();
        }
    });
}

#[tokio::test]
async fn test_ping_pong() {
    start_server().await;
    let mut stream = TcpStream::connect("127.0.0.1:9000").await.unwrap();
    stream.write_all(b"ping").await.unwrap();
    let mut buf = [0u8; 4];
    stream.read_exact(&mut buf).await.unwrap();
    assert_eq!(&buf, b"pong");
}
```
