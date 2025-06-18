## 📘 Section: Advanced Networking with Rust  
### 🔹 Category: Writing Network Proxies and Load Balancers  
#### ✅ Answer 880: Writing network proxies and load balancers

A simple TCP proxy or load balancer in Rust can be built using `std::net` and threads. Below is a basic example that forwards connections using round-robin:

```rust
use std::net::{TcpListener, TcpStream};
use std::thread;
use std::sync::atomic::{AtomicUsize, Ordering};
use std::sync::Arc;
use std::io::{Read, Write};

fn handle_client(mut client: TcpStream, backend_addr: String) {
    if let Ok(mut backend) = TcpStream::connect(backend_addr) {
        let mut buf = [0; 4096];
        loop {
            let n = client.read(&mut buf).unwrap_or(0);
            if n == 0 { break; }
            backend.write_all(&buf[..n]).unwrap();
            let m = backend.read(&mut buf).unwrap_or(0);
            if m == 0 { break; }
            client.write_all(&buf[..m]).unwrap();
        }
    }
}

fn main() {
    let backends = vec!["127.0.0.1:9001", "127.0.0.1:9002"];
    let counter = Arc::new(AtomicUsize::new(0));
    let listener = TcpListener::bind("127.0.0.1:8000").unwrap();
    for stream in listener.incoming() {
        let backend = {
            let idx = counter.fetch_add(1, Ordering::SeqCst) % backends.len();
            backends[idx].to_string()
        };
        let client = stream.unwrap();
        thread::spawn(move || handle_client(client, backend));
    }
}
```

This example forwards incoming connections to backends in a round-robin fashion. In production, add error handling and connection cleanup.
