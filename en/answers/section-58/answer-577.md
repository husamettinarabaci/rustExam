## 📘 Section: Game Engine Architecture
### 🔹 Category: Networked Multiplayer Architecture
#### ✅ Answer 577: Networked multiplayer architecture

Multiplayer network architecture enables data exchange between players. The client-server model provides central control, while peer-to-peer allows direct communication. In Rust, a basic TCP connection example:

```rust
use std::net::{TcpListener, TcpStream};
// Server
let listener = TcpListener::bind("127.0.0.1:8080").unwrap();
for stream in listener.incoming() {
    // Handle each connection
}
// Client
let stream = TcpStream::connect("127.0.0.1:8080").unwrap();
```
