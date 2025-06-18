## 📘 Bölüm: Rust ile İleri Ağ Programlama
### 🔹 Kategori: Async ağ programlama
#### ✅ Cevap 872: Async ağ programlama (tokio/async-std olmadan)

Bu örnekte, standart kütüphane ile non-blocking TCP soketleri ve select ile birden fazla bağlantı yönetimi gösterilmiştir. Her bağlantıdan gelen veri okunur ve ekrana yazılır.

```rust
use std::net::{TcpListener, TcpStream};
use std::io::{Read, Write};
use std::time::Duration;
use std::thread;
use std::collections::HashMap;
use std::os::unix::io::AsRawFd;
use nix::sys::select::{select, FdSet};

fn main() {
    let listener = TcpListener::bind("127.0.0.1:7879").unwrap();
    listener.set_nonblocking(true).unwrap();
    let mut clients: HashMap<i32, TcpStream> = HashMap::new();
    loop {
        if let Ok((stream, _)) = listener.accept() {
            let fd = stream.as_raw_fd();
            stream.set_nonblocking(true).unwrap();
            clients.insert(fd, stream);
        }
        let mut readfds = FdSet::new();
        readfds.insert(listener.as_raw_fd());
        for fd in clients.keys() {
            readfds.insert(*fd);
        }
        let _ = select(None, &mut readfds, None, None, Some(&mut Duration::from_millis(100)));
        let mut to_remove = vec![];
        for (fd, stream) in clients.iter_mut() {
            if readfds.contains(*fd) {
                let mut buf = [0; 128];
                match stream.read(&mut buf) {
                    Ok(0) => to_remove.push(*fd),
                    Ok(n) => println!("Gelen: {}", String::from_utf8_lossy(&buf[..n])),
                    Err(_) => {}
                }
            }
        }
        for fd in to_remove {
            clients.remove(&fd);
        }
    }
}
```
Not: Bu örnek için `nix` crate'i gereklidir. Sadece standart kütüphane ile tam select yapmak mümkün değildir, ancak temel non-blocking mantık gösterilmiştir.
