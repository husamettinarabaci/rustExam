## 📘 Bölüm: Rust ile İleri Ağ Programlama  
### 🔹 Kategori: Güvenli Ağ Programlama (TLS ve Rustls)  
#### ✅ Cevap 878: TLS ve Rustls ile güvenli ağ programlama

Rust'ta TLS ile güvenli bağlantı için `rustls` ve `tokio-rustls` gibi crate'ler kullanılır. Aşağıda, sunucu tarafında kendine imzalı sertifika ile TLS bağlantısı kuran bir örnek verilmiştir:

```rust
// Sunucu tarafı örneği (tokio-rustls ile)
use tokio_rustls::TlsAcceptor;
use tokio::net::TcpListener;
use std::sync::Arc;
use rustls::{ServerConfig, Certificate, PrivateKey};
use std::fs::File;
use std::io::BufReader;

#[tokio::main]
async fn main() {
    let certs = load_certs("cert.pem");
    let key = load_key("key.pem");
    let config = ServerConfig::builder()
        .with_safe_defaults()
        .with_no_client_auth()
        .with_single_cert(certs, key)
        .unwrap();
    let acceptor = TlsAcceptor::from(Arc::new(config));
    let listener = TcpListener::bind("127.0.0.1:8443").await.unwrap();
    loop {
        let (stream, _) = listener.accept().await.unwrap();
        let acceptor = acceptor.clone();
        tokio::spawn(async move {
            let mut tls_stream = acceptor.accept(stream).await.unwrap();
            // Burada veri alışverişi yapılabilir
        });
    }
}

fn load_certs(path: &str) -> Vec<Certificate> {
    let certfile = File::open(path).unwrap();
    let mut reader = BufReader::new(certfile);
    rustls_pemfile::certs(&mut reader)
        .unwrap()
        .into_iter()
        .map(Certificate)
        .collect()
}

fn load_key(path: &str) -> PrivateKey {
    let keyfile = File::open(path).unwrap();
    let mut reader = BufReader::new(keyfile);
    let keys = rustls_pemfile::pkcs8_private_keys(&mut reader).unwrap();
    PrivateKey(keys[0].clone())
}
```

Bu örnekte, sunucu TLS ile şifreli bağlantı kurar. Gerçek uygulamada hata yönetimi ve sertifika doğrulama eklenmelidir.
