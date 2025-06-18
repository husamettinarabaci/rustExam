## 📘 Bölüm: Yüksek Performanslı Serileştirme ve Deserileştirme
### 🔹 Kategori: Akış Serileştirme
#### ✅ Cevap 1225: Büyük veri setleri için akış serileştirme

Bu örnekte, büyük bir vektör `serde_json::Serializer` ile dosyaya parça parça (streaming) serileştirilir ve ardından tekrar okunup deserileştirilir.

```rust
use serde::Serialize;
use serde_json::{Serializer, Deserializer};
use std::fs::File;
use std::io::{BufWriter, BufReader};

fn main() {
    let data: Vec<u32> = (0..100_000).collect();
    let file = File::create("data.json").unwrap();
    let writer = BufWriter::new(file);
    let mut ser = Serializer::new(writer);
    data.serialize(&mut ser).unwrap();

    let file = File::open("data.json").unwrap();
    let reader = BufReader::new(file);
    let deser = Deserializer::from_reader(reader);
    let deser_data: Vec<u32> = serde::Deserialize::deserialize(deser).unwrap();
    println!("Deserilize edilen veri uzunluğu: {}", deser_data.len());
}
```

> Not: Streaming serileştirme, belleği verimli kullanmak için büyük veri setlerinde tercih edilir.
