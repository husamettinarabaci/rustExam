## 📘 Bölüm: Async Ağ ve IO
### 🔹 Kategori: Bağlantı havuzu ve çoklama
#### ✅ Cevap 1098: Bağlantı havuzu ve çoklama

Bu örnekte Tokio ile birden fazla TCP bağlantısı asenkron olarak yönetilir ve her sunucuya veri gönderilip yanıtlar toplanır.

```rust
use tokio::net::TcpStream;
use tokio::io::{AsyncReadExt, AsyncWriteExt};

#[tokio::main]
async fn main() {
    let servers = vec!["127.0.0.1:8001", "127.0.0.1:8002"];
    let mut handles = vec![];
    for addr in servers {
        let handle = tokio::spawn(async move {
            let mut stream = TcpStream::connect(addr).await.unwrap();
            stream.write_all(b"Merhaba!").await.unwrap();
            let mut buf = [0; 1024];
            let n = stream.read(&mut buf).await.unwrap();
            println!("{} yanıt: {}", addr, String::from_utf8_lossy(&buf[..n]));
        });
        handles.push(handle);
    }
    for h in handles { h.await.unwrap(); }
}
```
