## 📘 Section: Systems Programming Mastery  
### 🔹 Category: Low-Latency Network Programming  
#### ✅ Answer 594: Low-latency network programming in Rust

For low-latency TCP applications in Rust, you can use std::net and std::time. Here is a simple TCP client example:

```rust
use std::io::{Read, Write};
use std::net::TcpStream;
use std::time::Instant;

fn main() {
    let start = Instant::now();
    let mut stream = TcpStream::connect("example.com:80").unwrap();
    stream.write_all(b"GET / HTTP/1.0\r\n\r\n").unwrap();
    let mut buf = [0; 512];
    stream.read(&mut buf).unwrap();
    let duration = start.elapsed();
    println!("Received response in {:?}", duration);
}
```
