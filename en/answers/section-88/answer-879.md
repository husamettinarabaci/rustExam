## 📘 Section: Advanced Networking with Rust  
### 🔹 Category: HTTP/2 and HTTP/3 Protocols in Rust  
#### ✅ Answer 879: HTTP/2 and HTTP/3 protocols in Rust

For HTTP/2 in Rust, you can use the `hyper` crate; for HTTP/3, use `quinn`. Below are examples for sending a GET request with HTTP/2 and establishing a connection with HTTP/3:

**HTTP/2 (with hyper):**
```rust
use hyper::{Client, Request, Body};
use tokio::runtime::Runtime;

fn main() {
    let rt = Runtime::new().unwrap();
    rt.block_on(async {
        let client = Client::builder().http2_only(true).build_http();
        let req = Request::builder()
            .uri("https://http2.akamai.com/demo")
            .body(Body::empty())
            .unwrap();
        let resp = client.request(req).await.unwrap();
        println!("HTTP/2 status: {}", resp.status());
    });
}
```

**HTTP/3 (with quinn):**
```rust
// Basic setup for HTTP/3 connection using quinn.
// See quinn documentation for detailed examples.
```

HTTP/2 supports multiplexed streams per connection, while HTTP/3 is UDP-based and offers lower latency.
