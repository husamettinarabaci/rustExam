## 📘 Bölüm: Oyun Motoru Mimarisi
### 🔹 Kategori: Ağ Tabanlı Çok Oyunculu Mimari
#### ✅ Cevap 577: Ağ tabanlı çok oyunculu mimari

Çok oyunculu ağ mimarisi, oyuncular arasında veri iletimini sağlar. Sunucu-istemci modeli merkezi kontrol sunarken, eşler arası modelde oyuncular doğrudan iletişim kurar. Rust'ta TCP ile temel bir bağlantı örneği:

```rust
use std::net::{TcpListener, TcpStream};
// Sunucu
let listener = TcpListener::bind("127.0.0.1:8080").unwrap();
for stream in listener.incoming() {
    // Her bağlantı için işlem
}
// İstemci
let stream = TcpStream::connect("127.0.0.1:8080").unwrap();
```
