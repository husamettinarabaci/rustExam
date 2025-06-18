## 📘 Section: Advanced Networking with Rust  
### 🔹 Category: Writing High-Performance Servers with mio  
#### ✅ Answer 877: Writing high-performance servers with mio

The `mio` crate is used for low-level, event-driven network programming. Below is a simple TCP server example that handles multiple connections:

```rust
use mio::{Events, Interest, Poll, Token};
use mio::net::TcpListener;
use std::collections::HashMap;
use std::io::{Read, Write};

fn main() -> std::io::Result<()> {
    let mut poll = Poll::new()?;
    let mut events = Events::with_capacity(128);
    let addr = "127.0.0.1:9000".parse().unwrap();
    let mut server = TcpListener::bind(addr)?;
    poll.registry().register(&mut server, Token(0), Interest::READABLE)?;
    let mut connections = HashMap::new();
    loop {
        poll.poll(&mut events, None)?;
        for event in events.iter() {
            match event.token() {
                Token(0) => {
                    let (mut connection, address) = server.accept()?;
                    let token = Token(address.port() as usize);
                    poll.registry().register(&mut connection, token, Interest::READABLE)?;
                    connections.insert(token, connection);
                }
                token => {
                    if let Some(conn) = connections.get_mut(&token) {
                        let mut buf = [0; 1024];
                        let n = conn.read(&mut buf)?;
                        if n > 0 {
                            conn.write_all(b"pong\n")?;
                        }
                    }
                }
            }
        }
    }
}
```

This code replies with "pong" to incoming connections. In production, add error handling and connection cleanup.
