## 📘 Bölüm: Async Ağ ve IO
### 🔹 Kategori: Ağ programlama için `tokio::net` kullanımı
#### ✅ Cevap 1094: Ağ programlama için `tokio::net` kullanımı

Bu örnekte `tokio::net` ile birden fazla istemciyi aynı anda kabul eden bir TCP sunucusu oluşturulmuştur. Her bağlantı için ayrı bir async görev başlatılır.

```rust
use tokio::net::TcpListener;
use tokio::io::{AsyncReadExt, AsyncWriteExt};

#[tokio::main]
async fn main() {
    let listener = TcpListener::bind("127.0.0.1:8081").await.unwrap();
    loop {
        let (mut socket, addr) = listener.accept().await.unwrap();
        tokio::spawn(async move {
            let mut buf = [0; 1024];
            let n = socket.read(&mut buf).await.unwrap();
            println!("{}: {}", addr, String::from_utf8_lossy(&buf[..n]));
            socket.write_all(b"Merhaba, istemci!").await.unwrap();
        });
    }
}
```
