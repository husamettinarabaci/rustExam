## 📘 Section: Async Resource Management  
### 🔹 Category: Async Resource Management  
#### ✅ Answer 1116: Scoped resource management with async tasks

In this example, each async task opens its own resource (file or socket), and the resource is automatically closed when the task completes. This ensures resources are only held for the necessary scope.

```rust
use tokio::fs::File;
use tokio::io::AsyncReadExt;
use tokio::net::TcpStream;

tokio::spawn(async {
    let mut file = File::open("foo.txt").await.unwrap();
    let mut buf = String::new();
    file.read_to_string(&mut buf).await.unwrap();
    println!("File read: {}", buf);
    // file is closed here
});

tokio::spawn(async {
    let mut stream = TcpStream::connect("127.0.0.1:8080").await.unwrap();
    stream.writable().await.unwrap();
    println!("Socket is writable");
    // stream is closed here
});
```
