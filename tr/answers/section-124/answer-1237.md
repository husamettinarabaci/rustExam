## 📘 Bölüm: Mikroservisler ve Servis Mesh'leri
### 🔹 Kategori: OpenTelemetry ile Dağıtık Loglama ve İzleme
#### ✅ Cevap 1237: Karşılıklı TLS ile mikroservis güvenliği

Karşılıklı TLS (mTLS), hem istemci hem de sunucunun sertifika ile kimlik doğrulaması yapmasını sağlar. Rust'ta `axum`, `hyper` ve `rustls` gibi kütüphanelerle mTLS kurulabilir. Sertifikalar OpenSSL gibi araçlarla üretilir ve sunucu, istemci sertifikası doğrulamasını zorunlu kılar.

```rust
use axum::{routing::get, Router};
use std::net::SocketAddr;
use std::sync::Arc;
use rustls::{Certificate, PrivateKey, ServerConfig, RootCertStore, AllowAnyAuthenticatedClient};
use tokio_rustls::TlsAcceptor;

// Sunucu sertifikası, anahtar ve CA sertifikası yüklenir
// ... (yükleme kodu kısaltıldı)

let mut root_store = RootCertStore::empty();
root_store.add(&ca_cert).unwrap();
let client_auth = AllowAnyAuthenticatedClient::new(root_store);
let config = ServerConfig::builder()
    .with_safe_defaults()
    .with_client_cert_verifier(Arc::new(client_auth))
    .with_single_cert(server_certs, server_key)?;
let acceptor = TlsAcceptor::from(Arc::new(config));

// Axum/Hyper sunucusunda acceptor kullanılır
```

Bu yapılandırma, yalnızca geçerli sertifikaya sahip istemcilerin bağlanmasına izin verir. Sertifika üretimi genellikle OpenSSL ile yapılır.
