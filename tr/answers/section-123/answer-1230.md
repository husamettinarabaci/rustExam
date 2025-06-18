## 📘 Bölüm: Yüksek Performanslı Serileştirme ve Deserileştirme
### 🔹 Kategori: Verimli Şema Evrimi Tasarımı
#### ✅ Cevap 1230: Verimli şema evrimi tasarımı

Şema evrimi için en iyi uygulama, yeni alanlar eklerken `#[serde(default)]` kullanmak, kaldırılan alanları opsiyonel yapmak ve yeniden adlandırmalarda `#[serde(rename = "...")]` özniteliğini kullanmaktır. Böylece eski verilerle uyumluluk korunur.

```rust
use serde::{Serialize, Deserialize};

#[derive(Serialize, Deserialize, Debug)]
struct Old {
    id: u32,
    name: String,
}

#[derive(Serialize, Deserialize, Debug)]
struct New {
    id: u32,
    #[serde(default)]
    name: String,
    #[serde(default)]
    email: Option<String>,
    #[serde(rename = "id")]
    identifier: u32,
}

// Eski veriler yeni struct ile deserilize edilebilir.
```

> Not: `#[serde(default)]` yeni/kaldırılan alanlar için, `#[serde(rename = "...")]` ise yeniden adlandırma için kullanılır. Bu öznitelikler şema evriminde veri kaybını önler.
