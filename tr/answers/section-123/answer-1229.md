## 📘 Bölüm: Yüksek Performanslı Serileştirme ve Deserileştirme
### 🔹 Kategori: Dağıtık Sistemlerde Serileştirme
#### ✅ Cevap 1229: Dağıtık sistemlerde serileştirme

Aşağıda, bir struct MessagePack ile serileştirilip TCP üzerinden gönderilir ve diğer uçta deserileştirilir. MessagePack, kompakt ve hızlı olduğu için dağıtık sistemlerde yaygın olarak tercih edilir.

```rust
// Sunucu
use serde::Deserialize;
use std::net::TcpListener;

#[derive(Deserialize, Debug)]
struct Data {
    value: i32,
}

fn main() {
    let listener = TcpListener::bind("127.0.0.1:4000").unwrap();
    let (mut stream, _) = listener.accept().unwrap();
    let data: Data = rmp_serde::from_read(&mut stream).unwrap();
    println!("Sunucu aldı: {:?}", data);
}
```

```rust
// İstemci
use serde::Serialize;
use std::net::TcpStream;

#[derive(Serialize)]
struct Data {
    value: i32,
}

fn main() {
    let mut stream = TcpStream::connect("127.0.0.1:4000").unwrap();
    let data = Data { value: 42 };
    rmp_serde::encode::write(&mut stream, &data).unwrap();
}
```

> Not: MessagePack, platformdan bağımsız, hızlı ve kompakt olduğu için dağıtık sistemlerde veri iletimi için uygundur.
