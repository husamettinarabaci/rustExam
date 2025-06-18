## 📘 Bölüm: Yüksek Performanslı Serileştirme ve Deserileştirme
### 🔹 Kategori: Sürümleme ve Geriye Dönük Uyumluluk
#### ✅ Cevap 1227: Sürümleme ve geriye dönük uyumluluk

Aşağıda, eski bir struct ile serileştirilen veri, yeni bir alan eklenmiş struct ile deserileştirilir. Yeni alan için varsayılan değer atanır ve böylece geriye dönük uyumluluk sağlanır.

```rust
use serde::{Serialize, Deserialize};

#[derive(Serialize, Deserialize, Debug)]
struct OldVersion {
    id: u32,
}

#[derive(Serialize, Deserialize, Debug)]
struct NewVersion {
    id: u32,
    #[serde(default)]
    name: String,
}

fn main() {
    let old = OldVersion { id: 42 };
    let json = serde_json::to_string(&old).unwrap();
    let new: NewVersion = serde_json::from_str(&json).unwrap();
    println!("Yeni struct ile deserilize: {:?}", new);
}
```

> Not: `#[serde(default)]` ile yeni alanlar için varsayılan değer atanır ve eski verilerle uyumluluk korunur.
