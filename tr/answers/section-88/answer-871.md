## 📘 Bölüm: Rust ile İleri Ağ Programlama
### 🔹 Kategori: Özel TCP/UDP protokolleri implementasyonu
#### ✅ Cevap 871: Özel TCP/UDP protokolleri implementasyonu

Bu örnekte, Rust ile basit bir TCP sunucusu ve istemcisi oluşturulmuş, özel bir mesaj formatı ile veri alışverişi yapılmıştır. Sunucu gelen mesajı okur ve "OK:" ile yanıtlar.

```rust
// Sunucu
use std::net::{TcpListener, TcpStream};
use std::io::{Read, Write};
use std::thread;

fn handle_client(mut stream: TcpStream) {
    let mut buf = [0; 128];
    let n = stream.read(&mut buf).unwrap();
    let msg = String::from_utf8_lossy(&buf[..n]);
    println!("Gelen mesaj: {}", msg);
    let response = format!("OK:{}", msg);
    stream.write_all(response.as_bytes()).unwrap();
}

fn main() {
    let listener = TcpListener::bind("127.0.0.1:7878").unwrap();
    thread::spawn(move || {
        for stream in listener.incoming() {
            handle_client(stream.unwrap());
        }
    });
    // İstemci
    let mut stream = TcpStream::connect("127.0.0.1:7878").unwrap();
    stream.write_all(b"HELLO").unwrap();
    let mut buf = [0; 128];
    let n = stream.read(&mut buf).unwrap();
    println!("Sunucudan yanıt: {}", String::from_utf8_lossy(&buf[..n]));
}
```
