## 📘 Section: Microservices and Service Meshes
### 🔹 Category: Distributed Logging and Tracing with OpenTelemetry
#### ✅ Answer 1237: Securing microservices with mutual TLS

Mutual TLS (mTLS) ensures both the client and server authenticate each other using certificates. In Rust, you can use crates like `axum`, `hyper`, and `rustls` to set up mTLS. Certificates are generated for both parties, and the server is configured to require client authentication.

```rust
use axum::{routing::get, Router};
use std::net::SocketAddr;
use std::sync::Arc;
use rustls::{Certificate, PrivateKey, ServerConfig, RootCertStore, AllowAnyAuthenticatedClient};
use tokio_rustls::TlsAcceptor;

// Load server cert, key, and CA cert for client auth
// ... (loading code omitted for brevity)

let mut root_store = RootCertStore::empty();
root_store.add(&ca_cert).unwrap();
let client_auth = AllowAnyAuthenticatedClient::new(root_store);
let config = ServerConfig::builder()
    .with_safe_defaults()
    .with_client_cert_verifier(Arc::new(client_auth))
    .with_single_cert(server_certs, server_key)?;
let acceptor = TlsAcceptor::from(Arc::new(config));

// Use acceptor in Axum/Hyper server
```

This setup ensures only clients with valid certificates can connect. Certificate generation is typically done with OpenSSL or similar tools.
