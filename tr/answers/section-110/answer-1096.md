## 📘 Bölüm: Async Ağ ve IO
### 🔹 Kategori: Proxy ve ağ geçidi implementasyonu
#### ✅ Cevap 1096: Proxy ve ağ geçidi implementasyonu

Bu örnekte Tokio ile basit bir TCP proxy sunucusu oluşturulmuştur. Proxy, istemciden gelen veriyi hedef sunucuya iletir ve yanıtı istemciye aktarır.

```rust
use tokio::net::{TcpListener, TcpStream};
use tokio::io;

#[tokio::main]
async fn main() {
    let listener = TcpListener::bind("127.0.0.1:8888").await.unwrap();
    while let Ok((mut inbound, _)) = listener.accept().await {
        tokio::spawn(async move {
            let mut outbound = TcpStream::connect("127.0.0.1:8080").await.unwrap();
            let (mut ri, mut wi) = inbound.split();
            let (mut ro, mut wo) = outbound.split();
            let client_to_server = io::copy(&mut ri, &mut wo);
            let server_to_client = io::copy(&mut ro, &mut wi);
            tokio::try_join!(client_to_server, server_to_client).unwrap();
        });
    }
}
```
