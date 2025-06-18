## 📘 Section: Advanced Networking with Rust  
### 🔹 Category: Implementing Custom TCP/UDP Protocols  
#### ✅ Answer 876: Implementing custom TCP/UDP protocols

You can use Rust's `std::net` module to implement custom protocols over TCP or UDP. Below is a simple TCP example where the server responds with "WORLD" when it receives "HELLO":

```rust
use std::net::{TcpListener, TcpStream};
use std::io::{Read, Write};
use std::thread;

fn handle_client(mut stream: TcpStream) {
    let mut buffer = [0; 5];
    stream.read_exact(&mut buffer).unwrap();
    if &buffer == b"HELLO" {
        stream.write_all(b"WORLD").unwrap();
    }
}

fn main() {
    let listener = TcpListener::bind("127.0.0.1:7878").unwrap();
    for stream in listener.incoming() {
        thread::spawn(|| handle_client(stream.unwrap()));
    }
}
```

This example shows a server that replies with "WORLD" when it receives "HELLO". For production, use proper error handling instead of `unwrap`.
