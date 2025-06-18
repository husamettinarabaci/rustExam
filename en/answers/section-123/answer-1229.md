## 📘 Section: High-Performance Serialization and Deserialization
### 🔹 Category: Serialization in Distributed Systems
#### ✅ Answer 1229: Serialization in distributed systems

Below, a struct is serialized with MessagePack, sent over TCP, and deserialized on the other end. MessagePack is commonly used in distributed systems for its compactness and speed.

```rust
// Server
use serde::Deserialize;
use std::net::TcpListener;

#[derive(Deserialize, Debug)]
struct Data {
    value: i32,
}

fn main() {
    let listener = TcpListener::bind("127.0.0.1:4000").unwrap();
    let (mut stream, _) = listener.accept().unwrap();
    let data: Data = rmp_serde::from_read(&mut stream).unwrap();
    println!("Server received: {:?}", data);
}
```

```rust
// Client
use serde::Serialize;
use std::net::TcpStream;

#[derive(Serialize)]
struct Data {
    value: i32,
}

fn main() {
    let mut stream = TcpStream::connect("127.0.0.1:4000").unwrap();
    let data = Data { value: 42 };
    rmp_serde::encode::write(&mut stream, &data).unwrap();
}
```

> Note: MessagePack is suitable for distributed systems because it is platform-independent, fast, and compact.
