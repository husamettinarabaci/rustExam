## 📘 Section: Advanced Networking with Rust
### 🔹 Category: Writing high-performance servers with mio
#### ✅ Answer 873: Writing high-performance servers with mio

This example uses the `mio` crate to create a high-performance TCP server that supports multiple connections. Data from each connection is read and printed.

```rust
use mio::{Events, Interest, Poll, Token};
use mio::net::{TcpListener, TcpStream};
use std::collections::HashMap;
use std::io::{Read, Write};

fn main() -> std::io::Result<()> {
    let mut poll = Poll::new()?;
    let mut events = Events::with_capacity(128);
    let addr = "127.0.0.1:7880".parse().unwrap();
    let mut server = TcpListener::bind(addr)?;
    poll.registry().register(&mut server, Token(0), Interest::READABLE)?;
    let mut connections = HashMap::new();
    let mut unique_token = 1;
    loop {
        poll.poll(&mut events, None)?;
        for event in events.iter() {
            match event.token() {
                Token(0) => {
                    let (mut stream, _) = server.accept()?;
                    let token = Token(unique_token);
                    poll.registry().register(&mut stream, token, Interest::READABLE)?;
                    connections.insert(token, stream);
                    unique_token += 1;
                }
                token => {
                    if let Some(stream) = connections.get_mut(&token) {
                        let mut buf = [0; 128];
                        match stream.read(&mut buf) {
                            Ok(0) => { connections.remove(&token); },
                            Ok(n) => println!("Received: {}", String::from_utf8_lossy(&buf[..n])),
                            Err(_) => {}
                        }
                    }
                }
            }
        }
    }
}
```
Note: This example requires the `mio` crate.
