## 📘 Bölüm: İleri Async I/O ve Ağ Programlama  
### 🔹 Kategori: Düşük Seviyeli I/O Olay Bildirimi  
#### ✅ Cevap 1202: Düşük seviyeli I/O olay bildirimi için `mio` kullanımı

`mio`, Rust'ta düşük seviyeli, platformlar arası, olay tabanlı I/O işlemleri için kullanılan bir kütüphanedir. Özellikle yüksek performanslı sunucular ve ağ uygulamaları için uygundur. Aşağıda, `mio` ile TCP sunucusu başlatan bir örnek verilmiştir.

```rust
use mio::{Events, Interest, Poll, Token};
use mio::net::TcpListener;

fn main() -> std::io::Result<()> {
    let mut poll = Poll::new()?;
    let mut events = Events::with_capacity(128);
    let addr = "127.0.0.1:9000".parse().unwrap();
    let mut server = TcpListener::bind(addr)?;
    poll.registry().register(&mut server, Token(0), Interest::READABLE)?;
    println!("Sunucu başlatıldı. Bağlantı bekleniyor...");
    poll.poll(&mut events, None)?;
    for event in events.iter() {
        if event.token() == Token(0) {
            let (connection, address) = server.accept()?;
            println!("Bağlantı kabul edildi: {}", address);
        }
    }
    Ok(())
}
```

Bu örnekte, `mio` ile bir TCP sunucusu başlatılır ve gelen bağlantılar olay tabanlı olarak kabul edilir.
