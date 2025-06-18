## 📘 Section: Advanced Async I/O and Networking  
### 🔹 Category: Low-Level I/O Event Notification  
#### ✅ Answer 1202: Using `mio` for low-level I/O event notification

The `mio` crate provides low-level, cross-platform, event-driven I/O for Rust. It's suitable for building high-performance servers and network applications. Below is an example of starting a TCP server and accepting connections using `mio`.

```rust
use mio::{Events, Interest, Poll, Token};
use mio::net::TcpListener;

fn main() -> std::io::Result<()> {
    let mut poll = Poll::new()?;
    let mut events = Events::with_capacity(128);
    let addr = "127.0.0.1:9000".parse().unwrap();
    let mut server = TcpListener::bind(addr)?;
    poll.registry().register(&mut server, Token(0), Interest::READABLE)?;
    println!("Server started. Waiting for connections...");
    poll.poll(&mut events, None)?;
    for event in events.iter() {
        if event.token() == Token(0) {
            let (connection, address) = server.accept()?;
            println!("Accepted connection: {}", address);
        }
    }
    Ok(())
}
```

This example shows how to use `mio` to start a TCP server and accept connections in an event-driven way.
