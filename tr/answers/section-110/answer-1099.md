## 📘 Bölüm: Async Ağ ve IO  
### 🔹 Kategori: Özel protokolleri asenkron implementasyon  
#### ✅ Cevap 1099: Özel protokolleri asenkron implementasyon

Bu örnekte, Tokio ile TCP üzerinden basit bir metin tabanlı protokolü asenkron olarak işleyen bir sunucu gösterilmektedir. Sunucu, her bağlantıdan gelen mesajı okur ve "OK: <mesaj>" şeklinde yanıtlar.

```rust
use tokio::net::TcpListener;
use tokio::io::{AsyncBufReadExt, AsyncWriteExt, BufReader};

#[tokio::main]
async fn main() -> std::io::Result<()> {
    let listener = TcpListener::bind("127.0.0.1:8080").await?;
    loop {
        let (socket, _) = listener.accept().await?;
        tokio::spawn(async move {
            let (reader, mut writer) = socket.into_split();
            let mut reader = BufReader::new(reader);
            let mut line = String::new();
            while reader.read_line(&mut line).await.unwrap_or(0) > 0 {
                writer.write_all(format!("OK: {}", line).as_bytes()).await.ok();
                line.clear();
            }
        });
    }
}
```
