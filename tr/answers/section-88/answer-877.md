## 📘 Bölüm: Rust ile İleri Ağ Programlama  
### 🔹 Kategori: Yüksek Performanslı Sunucu Yazma  
#### ✅ Cevap 877: `mio` ile yüksek performanslı sunucu yazma

`mio` crate'i, düşük seviyeli, olay tabanlı ağ programlama için kullanılır. Aşağıda, birden fazla bağlantıyı yöneten basit bir TCP sunucu örneği verilmiştir:

```rust
use mio::{Events, Interest, Poll, Token};
use mio::net::TcpListener;
use std::collections::HashMap;
use std::io::{Read, Write};

fn main() -> std::io::Result<()> {
    let mut poll = Poll::new()?;
    let mut events = Events::with_capacity(128);
    let addr = "127.0.0.1:9000".parse().unwrap();
    let mut server = TcpListener::bind(addr)?;
    poll.registry().register(&mut server, Token(0), Interest::READABLE)?;
    let mut connections = HashMap::new();
    loop {
        poll.poll(&mut events, None)?;
        for event in events.iter() {
            match event.token() {
                Token(0) => {
                    let (mut connection, address) = server.accept()?;
                    let token = Token(address.port() as usize);
                    poll.registry().register(&mut connection, token, Interest::READABLE)?;
                    connections.insert(token, connection);
                }
                token => {
                    if let Some(conn) = connections.get_mut(&token) {
                        let mut buf = [0; 1024];
                        let n = conn.read(&mut buf)?;
                        if n > 0 {
                            conn.write_all(b"pong\n")?;
                        }
                    }
                }
            }
        }
    }
}
```

Bu kod, gelen bağlantılara "pong" yanıtı döner. Gerçek uygulamalarda hata yönetimi ve bağlantı kapatma eklenmelidir.
