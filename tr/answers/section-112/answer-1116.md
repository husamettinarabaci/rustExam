## 📘 Bölüm: Async Kaynak Yönetimi  
### 🔹 Kategori: Async Kaynak Yönetimi  
#### ✅ Cevap 1116: Async görevlerde kapsamlı kaynak yönetimi

Bu örnekte, her async görev kendi kaynağını (dosya veya soket) açar ve görev tamamlandığında kaynak otomatik olarak kapanır. Bu, kaynakların sadece ihtiyaç duyulan kapsamda tutulmasını sağlar.

```rust
use tokio::fs::File;
use tokio::io::AsyncReadExt;
use tokio::net::TcpStream;

tokio::spawn(async {
    let mut file = File::open("foo.txt").await.unwrap();
    let mut buf = String::new();
    file.read_to_string(&mut buf).await.unwrap();
    println!("Dosya okundu: {}", buf);
    // file burada kapanır
});

tokio::spawn(async {
    let mut stream = TcpStream::connect("127.0.0.1:8080").await.unwrap();
    stream.writable().await.unwrap();
    println!("Soket yazmaya hazır");
    // stream burada kapanır
});
```
