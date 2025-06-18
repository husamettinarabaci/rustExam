## 📘 Bölüm: Yüksek Performanslı Serileştirme ve Deserileştirme
### 🔹 Kategori: Bincode ve Ciborium Kullanımı
#### ✅ Cevap 1224: `bincode` ve `ciborium` crate'leri kullanımı

Bu örnekte, bir struct hem `bincode` hem de `ciborium` ile serileştirilip deserileştirilir. `bincode` hızlı ve kompakt ikili format sunarken, `ciborium` CBOR standardına uygun bir serileştirme sağlar.

```rust
use serde::{Serialize, Deserialize};

#[derive(Serialize, Deserialize, Debug, PartialEq)]
struct Item {
    id: u32,
    name: String,
}

fn main() {
    let item = Item { id: 1, name: "Kalem".to_string() };
    // bincode ile serileştirme
    let bincode_bytes = bincode::serialize(&item).unwrap();
    println!("bincode bytes: {:?}", bincode_bytes);
    let bincode_item: Item = bincode::deserialize(&bincode_bytes).unwrap();
    println!("bincode deserilize: {:?}", bincode_item);
    // ciborium ile serileştirme
    let mut cbor_bytes = Vec::new();
    ciborium::ser::into_writer(&item, &mut cbor_bytes).unwrap();
    println!("ciborium bytes: {:?}", cbor_bytes);
    let cbor_item: Item = ciborium::de::from_reader(&cbor_bytes[..]).unwrap();
    println!("ciborium deserilize: {:?}", cbor_item);
}
```

> Not: `bincode` ve `ciborium` crate'lerini eklemelisiniz. `bincode` daha kompakt ve hızlıdır, `ciborium` ise CBOR standardına uygundur.
