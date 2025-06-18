## 📘 Bölüm: Async Ağ ve IO
### 🔹 Kategori: Async TCP ve UDP iletişimi
#### ✅ Cevap 1091: Async TCP ve UDP iletişimi

Bu örnekte Tokio ile basit bir TCP sunucusu ve istemcisi oluşturulmuştur. Sunucu gelen bağlantıdan mesajı okur ve yanıt gönderir. İstemci ise sunucuya mesaj gönderip yanıtı alır.

```rust
// Sunucu
use tokio::net::TcpListener;
use tokio::io::{AsyncReadExt, AsyncWriteExt};

#[tokio::main]
async fn main() {
    let listener = TcpListener::bind("127.0.0.1:8080").await.unwrap();
    let (mut socket, _) = listener.accept().await.unwrap();
    let mut buf = [0; 1024];
    let n = socket.read(&mut buf).await.unwrap();
    println!("Gelen: {}", String::from_utf8_lossy(&buf[..n]));
    socket.write_all(b"Merhaba, istemci!").await.unwrap();
}
```

```rust
// İstemci
use tokio::net::TcpStream;
use tokio::io::{AsyncReadExt, AsyncWriteExt};

#[tokio::main]
async fn main() {
    let mut stream = TcpStream::connect("127.0.0.1:8080").await.unwrap();
    stream.write_all(b"Merhaba, sunucu!").await.unwrap();
    let mut buf = [0; 1024];
    let n = stream.read(&mut buf).await.unwrap();
    println!("Sunucudan: {}", String::from_utf8_lossy(&buf[..n]));
}
```
