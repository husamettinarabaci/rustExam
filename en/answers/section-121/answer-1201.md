## 📘 Section: Advanced Async I/O and Networking  
### 🔹 Category: Zero-Copy Networking  
#### ✅ Answer 1201: Implementing zero-copy networking in Rust

Zero-copy means transferring data directly between kernel and user space without unnecessary copying, improving performance and reducing CPU usage. In Rust, functions like `std::io::copy` can be used to transfer data between TCP streams efficiently.

```rust
use std::net::{TcpListener, TcpStream};
use std::io;

fn transfer(mut from: TcpStream, mut to: TcpStream) -> io::Result<u64> {
    std::io::copy(&mut from, &mut to)
}
```

This example uses `copy` to efficiently transfer data between streams without extra copying.
