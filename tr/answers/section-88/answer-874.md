## 📘 Bölüm: Rust ile İleri Ağ Programlama
### 🔹 Kategori: TLS ve Rustls ile güvenli ağ programlama
#### ✅ Cevap 874: TLS ve Rustls ile güvenli ağ programlama

Bu örnekte, `rustls` crate'i ile TLS destekli bir TCP sunucusu ve istemcisi oluşturulmuş, şifreli veri alışverişi yapılmıştır. Gerçek bir uygulamada sertifika ve anahtar dosyaları gereklidir.

```rust
// Bu örnek için rustls ve tokio-rustls crate'leri gereklidir.
// Sertifika ve anahtar dosyaları ile çalışır.
// Kısa örnek (tam uygulama için rustls dökümantasyonuna bakınız):

// Sunucu tarafı
// let config = ... // rustls sunucu konfigürasyonu
// let listener = TcpListener::bind("127.0.0.1:8443").await?;
// let (stream, _) = listener.accept().await?;
// let mut tls_stream = TlsAcceptor::from(Arc::new(config)).accept(stream).await?;
// tls_stream.write_all(b"Merhaba TLS!").await?;

// İstemci tarafı
// let config = ... // rustls istemci konfigürasyonu
// let stream = TcpStream::connect("127.0.0.1:8443").await?;
// let mut tls_stream = TlsConnector::from(Arc::new(config)).connect("localhost", stream).await?;
// let mut buf = vec![0; 128];
// tls_stream.read(&mut buf).await?;
// println!("Sunucudan: {}", String::from_utf8_lossy(&buf));
```
Not: Tam bir örnek için rustls ve tokio-rustls dökümantasyonuna bakınız. Sertifika/anahtar dosyaları gereklidir.
