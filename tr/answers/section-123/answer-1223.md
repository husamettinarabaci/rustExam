## 📘 Bölüm: Yüksek Performanslı Serileştirme ve Deserileştirme
### 🔹 Kategori: Sıfır Kopya Deserileştirme
#### ✅ Cevap 1223: Sıfır kopya deserileştirme teknikleri

Bu örnekte, `serde_bytes` ile bir byte dizisi sıfır kopya olarak deserileştirilir. `serde_bytes::Bytes` tipi, verinin bellekte kopyalanmadan referansla kullanılmasını sağlar.

```rust
use serde::{Deserialize};
use serde_bytes::Bytes;

#[derive(Deserialize, Debug)]
struct Data<'a> {
    #[serde(borrow)]
    #[serde(with = "serde_bytes")]
    bytes: &'a Bytes,
}

fn main() {
    // MessagePack formatında örnek veri
    let msgpack: &[u8] = &[0x81, 0xa5, b'b', b'y', b't', b'e', b's', 0xc4, 0x03, 1, 2, 3];
    let data: Data = rmp_serde::from_slice(msgpack).unwrap();
    println!("Sıfır kopya deserilize edilen: {:?}", data);
    // bytes alanı bellekte kopyalanmadan referansla kullanılır.
}
```

> Not: `serde_bytes` ve `rmp-serde` crate'lerini eklemelisiniz. Sıfır kopya için `#[serde(borrow)]` ve `&'a Bytes` kullanılır.
