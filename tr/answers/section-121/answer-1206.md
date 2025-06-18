## 📘 Bölüm: İleri Async I/O ve Ağ Programlama  
### 🔹 Kategori: TLS Oturum Yönetimi ve Yeniden Müzakere  
#### ✅ Cevap 1206: TLS oturum yönetimi ve yeniden müzakere

TLS oturum yönetimi, bağlantıların güvenliğini ve performansını artırmak için oturum anahtarlarının saklanmasını ve yeniden kullanılmasını sağlar. Yeniden müzakere, mevcut bir bağlantıda yeni anahtarlarla güvenliği günceller. Rust'ta `rustls` veya `native-tls` ile TLS bağlantısı kurulabilir.

```rust
use std::sync::Arc;
use rustls::{ClientConfig, ServerName};
use tokio_rustls::TlsConnector;
use tokio::net::TcpStream;

#[tokio::main]
async fn main() {
    let config = ClientConfig::builder().with_safe_defaults().with_root_certificates(rustls::RootCertStore::empty()).with_no_client_auth();
    let connector = TlsConnector::from(Arc::new(config));
    let stream = TcpStream::connect("example.com:443").await.unwrap();
    let domain = ServerName::try_from("example.com").unwrap();
    let _tls_stream = connector.connect(domain, stream).await.unwrap();
    println!("TLS bağlantısı kuruldu.");
}
```

Bu örnekte, `rustls` ve `tokio-rustls` ile TLS bağlantısı kurulmaktadır.
