## 📘 Bölüm: Rust ile İleri Ağ Programlama
### 🔹 Kategori: Yüksek performanslı sunucu yazma (mio)
#### ✅ Cevap 873: Yüksek performanslı sunucu yazma (mio)

Bu örnekte, `mio` crate'i ile çoklu bağlantı destekli, yüksek performanslı bir TCP sunucusu oluşturulmuştur. Her bağlantıdan gelen veri okunur ve ekrana yazılır.

```rust
use mio::{Events, Interest, Poll, Token};
use mio::net::{TcpListener, TcpStream};
use std::collections::HashMap;
use std::io::{Read, Write};

fn main() -> std::io::Result<()> {
    let mut poll = Poll::new()?;
    let mut events = Events::with_capacity(128);
    let addr = "127.0.0.1:7880".parse().unwrap();
    let mut server = TcpListener::bind(addr)?;
    poll.registry().register(&mut server, Token(0), Interest::READABLE)?;
    let mut connections = HashMap::new();
    let mut unique_token = 1;
    loop {
        poll.poll(&mut events, None)?;
        for event in events.iter() {
            match event.token() {
                Token(0) => {
                    let (mut stream, _) = server.accept()?;
                    let token = Token(unique_token);
                    poll.registry().register(&mut stream, token, Interest::READABLE)?;
                    connections.insert(token, stream);
                    unique_token += 1;
                }
                token => {
                    if let Some(stream) = connections.get_mut(&token) {
                        let mut buf = [0; 128];
                        match stream.read(&mut buf) {
                            Ok(0) => { connections.remove(&token); },
                            Ok(n) => println!("Gelen: {}", String::from_utf8_lossy(&buf[..n])),
                            Err(_) => {}
                        }
                    }
                }
            }
        }
    }
}
```
Not: Bu örnek için `mio` crate'i gereklidir.
