## 📘 Bölüm: Rust ile İleri Ağ Programlama  
### 🔹 Kategori: Özel TCP/UDP Protokolleri  
#### ✅ Cevap 876: Özel TCP/UDP protokolleri implementasyonu

Rust'ta TCP veya UDP ile özel bir protokol implementasyonu için `std::net` modülünü kullanabilirsiniz. Aşağıda, TCP üzerinden "HELLO" mesajı alan ve "WORLD" döndüren basit bir örnek sunulmuştur.

```rust
use std::net::{TcpListener, TcpStream};
use std::io::{Read, Write};
use std::thread;

fn handle_client(mut stream: TcpStream) {
    let mut buffer = [0; 5];
    stream.read_exact(&mut buffer).unwrap();
    if &buffer == b"HELLO" {
        stream.write_all(b"WORLD").unwrap();
    }
}

fn main() {
    let listener = TcpListener::bind("127.0.0.1:7878").unwrap();
    for stream in listener.incoming() {
        thread::spawn(|| handle_client(stream.unwrap()));
    }
}
```

Bu örnekte, sunucu "HELLO" mesajı aldığında "WORLD" yanıtı döner. Hata yönetimi ve bağlantı kapatma için unwrap yerine match ile hata kontrolü eklenebilir.
