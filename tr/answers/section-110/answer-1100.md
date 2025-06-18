## 📘 Bölüm: Async Ağ ve IO  
### 🔹 Kategori: Async ağ kodunu test etme  
#### ✅ Cevap 1100: Async ağ kodunu test etme

Bu örnekte, Tokio'nun test desteği ile async bir TCP sunucu ve istemci fonksiyonunun birim testi gösterilmektedir. Testte, istemci "ping" gönderir ve sunucudan "pong" yanıtı beklenir.

```rust
use tokio::net::{TcpListener, TcpStream};
use tokio::io::{AsyncReadExt, AsyncWriteExt};

async fn start_server() {
    let listener = TcpListener::bind("127.0.0.1:9000").await.unwrap();
    tokio::spawn(async move {
        let (mut socket, _) = listener.accept().await.unwrap();
        let mut buf = [0u8; 4];
        socket.read_exact(&mut buf).await.unwrap();
        if &buf == b"ping" {
            socket.write_all(b"pong").await.unwrap();
        }
    });
}

#[tokio::test]
async fn test_ping_pong() {
    start_server().await;
    let mut stream = TcpStream::connect("127.0.0.1:9000").await.unwrap();
    stream.write_all(b"ping").await.unwrap();
    let mut buf = [0u8; 4];
    stream.read_exact(&mut buf).await.unwrap();
    assert_eq!(&buf, b"pong");
}
```
