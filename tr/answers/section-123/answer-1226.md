## 📘 Bölüm: Yüksek Performanslı Serileştirme ve Deserileştirme
### 🔹 Kategori: Serileştiricilerin Performansını Karşılaştırma
#### ✅ Cevap 1226: Serileştiricilerin performansını karşılaştırma

Aşağıda, aynı veri yapısı üç farklı serileştirici ile serileştirilir ve her birinin süresi ile çıktı boyutu ölçülür. `std::time::Instant` ile süre, `len()` ile çıktı boyutu alınır.

```rust
use serde::{Serialize, Deserialize};
use std::time::Instant;

#[derive(Serialize, Deserialize)]
struct Data {
    values: Vec<u32>,
}

fn main() {
    let data = Data { values: (0..10_000).collect() };
    // serde_json
    let start = Instant::now();
    let json = serde_json::to_vec(&data).unwrap();
    let dur_json = start.elapsed();
    // bincode
    let start = Instant::now();
    let bin = bincode::serialize(&data).unwrap();
    let dur_bin = start.elapsed();
    // ciborium
    let start = Instant::now();
    let mut cbor = Vec::new();
    ciborium::ser::into_writer(&data, &mut cbor).unwrap();
    let dur_cbor = start.elapsed();
    println!("serde_json: {} bytes, {:?}", json.len(), dur_json);
    println!("bincode: {} bytes, {:?}", bin.len(), dur_bin);
    println!("ciborium: {} bytes, {:?}", cbor.len(), dur_cbor);
}
```

> Not: Sonuçlar donanım ve veri yapısına göre değişebilir. `bincode` genellikle en küçük ve hızlı, `serde_json` ise en okunabilir formattır.
