## 📘 Section: Async Networking and IO
### 🔹 Category: Handling streaming data asynchronously
#### ✅ Answer 1093: Handling streaming data asynchronously

This example shows how to transfer a file asynchronously over TCP using Tokio. The server saves the received data to a file, and the client reads a file and sends it.

```rust
// Server
use tokio::{net::TcpListener, io::AsyncWriteExt, fs::File, io::AsyncReadExt};

#[tokio::main]
async fn main() {
    let listener = TcpListener::bind("127.0.0.1:9000").await.unwrap();
    let (mut socket, _) = listener.accept().await.unwrap();
    let mut file = File::create("received.txt").await.unwrap();
    let mut buf = [0; 4096];
    loop {
        let n = socket.read(&mut buf).await.unwrap();
        if n == 0 { break; }
        file.write_all(&buf[..n]).await.unwrap();
    }
    println!("File saved.");
}
```

```rust
// Client
use tokio::{net::TcpStream, io::AsyncReadExt, fs::File, io::AsyncWriteExt};

#[tokio::main]
async fn main() {
    let mut stream = TcpStream::connect("127.0.0.1:9000").await.unwrap();
    let mut file = File::open("send.txt").await.unwrap();
    let mut buf = [0; 4096];
    loop {
        let n = file.read(&mut buf).await.unwrap();
        if n == 0 { break; }
        stream.write_all(&buf[..n]).await.unwrap();
    }
    println!("File sent.");
}
```
