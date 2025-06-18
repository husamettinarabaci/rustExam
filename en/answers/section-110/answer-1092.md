## 📘 Section: Async Networking and IO
### 🔹 Category: Async HTTP Client and Server
#### ✅ Answer 1092: Async HTTP client and server

This example uses `tokio` and `hyper` to create a simple async HTTP server and client. The server responds to GET requests with "Hello, World!" and the client prints the response.

```rust
// Server
use hyper::{Body, Response, Server, Request, Method};
use hyper::service::{make_service_fn, service_fn};

#[tokio::main]
async fn main() {
    let make_svc = make_service_fn(|_conn| async {
        Ok::<_, hyper::Error>(service_fn(|req: Request<Body>| async move {
            if req.method() == Method::GET {
                Ok::<_, hyper::Error>(Response::new(Body::from("Hello, World!")))
            } else {
                Ok::<_, hyper::Error>(Response::new(Body::from("Only GET!")))
            }
        }))
    });
    let addr = ([127, 0, 0, 1], 3000).into();
    let server = Server::bind(&addr).serve(make_svc);
    println!("Server running at http://127.0.0.1:3000");
    server.await.unwrap();
}
```

```rust
// Client
use hyper::{Client, Uri};

#[tokio::main]
async fn main() {
    let client = Client::new();
    let uri: Uri = "http://127.0.0.1:3000".parse().unwrap();
    let resp = client.get(uri).await.unwrap();
    let bytes = hyper::body::to_bytes(resp.into_body()).await.unwrap();
    println!("Response: {}", String::from_utf8_lossy(&bytes));
}
```
