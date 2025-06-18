## 📘 Section: Advanced Networking with Rust
### 🔹 Category: Implementing custom TCP/UDP protocols
#### ✅ Answer 871: Implementing custom TCP/UDP protocols

This example creates a simple TCP server and client in Rust, using a custom message format. The server reads a message and replies with "OK:" followed by the received message.

```rust
// Server
use std::net::{TcpListener, TcpStream};
use std::io::{Read, Write};
use std::thread;

fn handle_client(mut stream: TcpStream) {
    let mut buf = [0; 128];
    let n = stream.read(&mut buf).unwrap();
    let msg = String::from_utf8_lossy(&buf[..n]);
    println!("Received: {}", msg);
    let response = format!("OK:{}", msg);
    stream.write_all(response.as_bytes()).unwrap();
}

fn main() {
    let listener = TcpListener::bind("127.0.0.1:7878").unwrap();
    thread::spawn(move || {
        for stream in listener.incoming() {
            handle_client(stream.unwrap());
        }
    });
    // Client
    let mut stream = TcpStream::connect("127.0.0.1:7878").unwrap();
    stream.write_all(b"HELLO").unwrap();
    let mut buf = [0; 128];
    let n = stream.read(&mut buf).unwrap();
    println!("Server replied: {}", String::from_utf8_lossy(&buf[..n]));
}
```
