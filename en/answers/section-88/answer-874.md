## 📘 Section: Advanced Networking with Rust
### 🔹 Category: Secure networking with TLS and Rustls
#### ✅ Answer 874: Secure networking with TLS and Rustls

This example uses the `rustls` crate to create a TLS-enabled TCP server and client, exchanging encrypted data. In a real application, certificate and key files are required.

```rust
// This example requires the rustls and tokio-rustls crates.
// Certificate and key files are needed.
// Short example (see rustls documentation for full implementation):

// Server side
// let config = ... // rustls server configuration
// let listener = TcpListener::bind("127.0.0.1:8443").await?;
// let (stream, _) = listener.accept().await?;
// let mut tls_stream = TlsAcceptor::from(Arc::new(config)).accept(stream).await?;
// tls_stream.write_all(b"Hello TLS!").await?;

// Client side
// let config = ... // rustls client configuration
// let stream = TcpStream::connect("127.0.0.1:8443").await?;
// let mut tls_stream = TlsConnector::from(Arc::new(config)).connect("localhost", stream).await?;
// let mut buf = vec![0; 128];
// tls_stream.read(&mut buf).await?;
// println!("Server replied: {}", String::from_utf8_lossy(&buf));
```
Note: See rustls and tokio-rustls documentation for a complete example. Certificate/key files are required.
