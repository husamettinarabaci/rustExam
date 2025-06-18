## 📘 Section: Advanced Networking with Rust
### 🔹 Category: Async network programming
#### ✅ Answer 872: Async network programming (without tokio/async-std)

This example demonstrates non-blocking TCP sockets and select-based management of multiple connections using the standard library. Data from each connection is read and printed.

```rust
use std::net::{TcpListener, TcpStream};
use std::io::{Read, Write};
use std::time::Duration;
use std::thread;
use std::collections::HashMap;
use std::os::unix::io::AsRawFd;
use nix::sys::select::{select, FdSet};

fn main() {
    let listener = TcpListener::bind("127.0.0.1:7879").unwrap();
    listener.set_nonblocking(true).unwrap();
    let mut clients: HashMap<i32, TcpStream> = HashMap::new();
    loop {
        if let Ok((stream, _)) = listener.accept() {
            let fd = stream.as_raw_fd();
            stream.set_nonblocking(true).unwrap();
            clients.insert(fd, stream);
        }
        let mut readfds = FdSet::new();
        readfds.insert(listener.as_raw_fd());
        for fd in clients.keys() {
            readfds.insert(*fd);
        }
        let _ = select(None, &mut readfds, None, None, Some(&mut Duration::from_millis(100)));
        let mut to_remove = vec![];
        for (fd, stream) in clients.iter_mut() {
            if readfds.contains(*fd) {
                let mut buf = [0; 128];
                match stream.read(&mut buf) {
                    Ok(0) => to_remove.push(*fd),
                    Ok(n) => println!("Received: {}", String::from_utf8_lossy(&buf[..n])),
                    Err(_) => {}
                }
            }
        }
        for fd in to_remove {
            clients.remove(&fd);
        }
    }
}
```
Note: This example requires the `nix` crate. Pure standard library select is not available, but the basic non-blocking logic is demonstrated.
