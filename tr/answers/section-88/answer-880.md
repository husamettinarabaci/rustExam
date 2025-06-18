## 📘 Bölüm: Rust ile İleri Ağ Programlama  
### 🔹 Kategori: Ağ Proxy ve Yük Dengeleyici Yazma  
#### ✅ Cevap 880: Ağ proxy ve yük dengeleyici yazma

Rust'ta basit bir TCP proxy veya yük dengeleyici için `std::net` ve thread'ler kullanılabilir. Aşağıda, round-robin ile bağlantı yönlendiren temel bir örnek verilmiştir:

```rust
use std::net::{TcpListener, TcpStream};
use std::thread;
use std::sync::atomic::{AtomicUsize, Ordering};
use std::sync::Arc;
use std::io::{Read, Write};

fn handle_client(mut client: TcpStream, backend_addr: String) {
    if let Ok(mut backend) = TcpStream::connect(backend_addr) {
        let mut buf = [0; 4096];
        loop {
            let n = client.read(&mut buf).unwrap_or(0);
            if n == 0 { break; }
            backend.write_all(&buf[..n]).unwrap();
            let m = backend.read(&mut buf).unwrap_or(0);
            if m == 0 { break; }
            client.write_all(&buf[..m]).unwrap();
        }
    }
}

fn main() {
    let backends = vec!["127.0.0.1:9001", "127.0.0.1:9002"];
    let counter = Arc::new(AtomicUsize::new(0));
    let listener = TcpListener::bind("127.0.0.1:8000").unwrap();
    for stream in listener.incoming() {
        let backend = {
            let idx = counter.fetch_add(1, Ordering::SeqCst) % backends.len();
            backends[idx].to_string()
        };
        let client = stream.unwrap();
        thread::spawn(move || handle_client(client, backend));
    }
}
```

Bu örnekte, gelen bağlantılar round-robin ile arka uçlara yönlendirilir. Gerçek uygulamada hata yönetimi ve bağlantı kapatma eklenmelidir.
