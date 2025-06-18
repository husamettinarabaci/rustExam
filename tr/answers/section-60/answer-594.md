## 📘 Bölüm: Sistem Programlama Ustalığı  
### 🔹 Kategori: Düşük Gecikmeli Ağ Programlama  
#### ✅ Cevap 594: Rust'ta düşük gecikmeli ağ programlama

Rust'ta düşük gecikmeli TCP uygulamaları için std::net ve std::time kullanılabilir. Aşağıda basit bir TCP istemcisi örneği verilmiştir:

```rust
use std::io::{Read, Write};
use std::net::TcpStream;
use std::time::Instant;

fn main() {
    let start = Instant::now();
    let mut stream = TcpStream::connect("example.com:80").unwrap();
    stream.write_all(b"GET / HTTP/1.0\r\n\r\n").unwrap();
    let mut buf = [0; 512];
    stream.read(&mut buf).unwrap();
    let duration = start.elapsed();
    println!("Received response in {:?}", duration);
}
```
