## 📘 Bölüm: Yüksek Performanslı Serileştirme ve Deserileştirme
### 🔹 Kategori: Serileştirme Temelleri
#### ✅ Cevap 1221: Serileştirme için `serde` kullanımı

Bu örnekte, bir struct tanımlanır ve `serde` ile JSON formatında serileştirilip tekrar deserileştirilir. `serde` ve `serde_json` crate'leri ile hem serileştirme hem de deserileştirme işlemleri kolayca yapılabilir.

```rust
use serde::{Serialize, Deserialize};
use serde_json;

#[derive(Serialize, Deserialize, Debug)]
struct Person {
    name: String,
    age: u8,
}

fn main() {
    let person = Person { name: "Ahmet".to_string(), age: 30 };
    // Serileştirme
    let json = serde_json::to_string(&person).unwrap();
    println!("JSON: {}", json);
    // Deserileştirme
    let deserialized: Person = serde_json::from_str(&json).unwrap();
    println!("Deserilize edilen: {:?}", deserialized);
}
```

> Not: `serde` ve `serde_json` bağımlılıklarını `Cargo.toml` dosyanıza eklemelisiniz.
