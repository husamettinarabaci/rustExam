## 📘 Bölüm: Yüksek Performanslı Serileştirme ve Deserileştirme
### 🔹 Kategori: Özel Serileştirme Formatları
#### ✅ Cevap 1222: Özel serileştirme formatları ve codec'ler

Bu örnekte, bir struct MessagePack formatında serileştirilip deserileştirilir. `rmp-serde` crate'i kullanılmıştır.

```rust
use serde::{Serialize, Deserialize};
use rmp_serde::{encode, decode};

#[derive(Serialize, Deserialize, Debug, PartialEq)]
struct Point {
    x: i32,
    y: i32,
}

fn main() {
    let point = Point { x: 10, y: 20 };
    // Serileştirme
    let buf = encode::to_vec(&point).unwrap();
    println!("MessagePack bytes: {:?}", buf);
    // Deserileştirme
    let deserialized: Point = decode::from_slice(&buf).unwrap();
    println!("Deserilize edilen: {:?}", deserialized);
}
```

> Not: `rmp-serde` crate'ini `Cargo.toml` dosyanıza eklemelisiniz.
