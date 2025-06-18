## 📘 Bölüm: Async Ağ ve IO
### 🔹 Kategori: Rustls ile güvenli iletişim
#### ✅ Cevap 1095: Rustls ile güvenli iletişim

Bu örnekte `tokio-rustls` ile TLS destekli bir TCP sunucusu ve istemcisi oluşturulmuştur. Gerçek uygulamada sertifika ve anahtar dosyaları gereklidir.

```rust
// Sunucu (özet)
use tokio_rustls::TlsAcceptor;
// ...sertifika ve anahtar yükleme kodu...
// TcpListener ile bağlantı kabul et, TlsAcceptor ile sarmala
// Okuma/yazma işlemleri async olarak yapılır
```

```rust
// İstemci (özet)
use tokio_rustls::TlsConnector;
// ...sertifika doğrulama ve bağlantı kodu...
// TcpStream ile bağlantı kur, TlsConnector ile sarmala
// Mesaj gönder ve yanıtı oku
```

> Not: Tam örnek için tokio-rustls dökümantasyonuna bakınız. Sertifika ve anahtar dosyaları gereklidir.
