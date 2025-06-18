## 📘 Bölüm: Async Kaynak Yönetimi  
### 🔹 Kategori: Async Kaynak Yönetimi  
#### ✅ Cevap 1115: Dosya tanıtıcıları ve soketleri asenkron yönetme

Bu örnekte, `tokio` kullanarak hem dosya hem de TCP soketini asenkron olarak açıp yönetiyoruz. Dosya içeriği okunur, ardından bir TCP soketine veri gönderilir. Her iki kaynak da otomatik olarak kapatılır.

```rust
use tokio::fs::File;
use tokio::io::{AsyncReadExt, AsyncWriteExt};
use tokio::net::TcpStream;

#[tokio::main]
async fn main() -> std::io::Result<()> {
    // Dosya açma ve okuma
    let mut file = File::open("test.txt").await?;
    let mut contents = String::new();
    file.read_to_string(&mut contents).await?;
    println!("Dosya içeriği: {}", contents);

    // TCP soketi oluşturma ve veri gönderme
    let mut stream = TcpStream::connect("127.0.0.1:8080").await?;
    stream.write_all(b"Merhaba async soket!").await?;
    // Kaynaklar otomatik olarak kapanır
    Ok(())
}
```
