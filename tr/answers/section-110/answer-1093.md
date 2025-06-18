## 📘 Bölüm: Async Ağ ve IO
### 🔹 Kategori: Akış verisini asenkron yönetme
#### ✅ Cevap 1093: Akış verisini asenkron yönetme

Bu örnekte Tokio ile bir dosya TCP üzerinden asenkron olarak aktarılır. Sunucu gelen veriyi bir dosyaya kaydeder, istemci ise dosyayı okur ve gönderir.

```rust
// Sunucu
use tokio::{net::TcpListener, io::AsyncWriteExt, fs::File};

#[tokio::main]
async fn main() {
    let listener = TcpListener::bind("127.0.0.1:9000").await.unwrap();
    let (mut socket, _) = listener.accept().await.unwrap();
    let mut file = File::create("alindi.txt").await.unwrap();
    let mut buf = [0; 4096];
    loop {
        let n = socket.read(&mut buf).await.unwrap();
        if n == 0 { break; }
        file.write_all(&buf[..n]).await.unwrap();
    }
    println!("Dosya kaydedildi.");
}
```

```rust
// İstemci
use tokio::{net::TcpStream, io::AsyncReadExt, fs::File};

#[tokio::main]
async fn main() {
    let mut stream = TcpStream::connect("127.0.0.1:9000").await.unwrap();
    let mut file = File::open("gonder.txt").await.unwrap();
    let mut buf = [0; 4096];
    loop {
        let n = file.read(&mut buf).await.unwrap();
        if n == 0 { break; }
        stream.write_all(&buf[..n]).await.unwrap();
    }
    println!("Dosya gönderildi.");
}
```
