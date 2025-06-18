## 📘 Bölüm: Sistem Güvenliği ve Sertleştirme
### 🔹 Kategori: Güvenli Ağ Protokolleri Oluşturma
#### ✅ Cevap 919: Rust'ta güvenli ağ protokolleri oluşturma

Güvenli ağ protokolleri şifreleme, kimlik doğrulama ve bütünlük kontrolleri gerektirir. Rust'ta `rustls` ile TLS, `tokio` ile asenkron ağ programlama yapılabilir. Aşağıda `rustls` ve `tokio` ile basit bir TLS istemcisi örneği verilmiştir:

```rust
use tokio_rustls::TlsConnector;
use tokio::net::TcpStream;
use webpki_roots::TLS_SERVER_ROOTS;
use rustls::{ClientConfig, ServerName};
use std::sync::Arc;

#[tokio::main]
async fn main() {
    let config = ClientConfig::builder()
        .with_safe_defaults()
        .with_root_certificates(TLS_SERVER_ROOTS.clone())
        .with_no_client_auth();
    let connector = TlsConnector::from(Arc::new(config));
    let stream = TcpStream::connect("example.com:443").await.unwrap();
    let domain = ServerName::try_from("example.com").unwrap();
    let _tls_stream = connector.connect(domain, stream).await.unwrap();
    println!("Güvenli bağlantı kuruldu");
}
```

Her zaman sertifikaları doğrulayın ve güncel kriptografik kütüphaneler kullanın.
