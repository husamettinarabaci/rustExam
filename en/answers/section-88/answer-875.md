## 📘 Section: Advanced Networking with Rust
### 🔹 Category: HTTP/2 and HTTP/3 protocols
#### ✅ Answer 875: Building a server with HTTP/2 and HTTP/3 protocols

This example uses the hyper crate to create an HTTP/2 server and respond to a basic GET request. For HTTP/3, use the quinn crate and additional configuration.

```rust
// This example requires the hyper crate.
use hyper::{Body, Request, Response, Server};
use hyper::service::{make_service_fn, service_fn};
use std::convert::Infallible;

#[tokio::main]
async fn main() {
    let make_svc = make_service_fn(|_conn| async {
        Ok::<_, Infallible>(service_fn(|_req: Request<Body>| async {
            Ok::<_, Infallible>(Response::new(Body::from("Hello HTTP/2!")))
        }))
    });
    let addr = ([127, 0, 0, 1], 3000).into();
    let server = Server::bind(&addr).http2_only(true).serve(make_svc);
    println!("HTTP/2 server started: http://{}", addr);
    server.await.unwrap();
}
```
Note: For HTTP/3, use the quinn crate and additional setup.
