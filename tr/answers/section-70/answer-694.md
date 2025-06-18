## 📘 Bölüm: Full-Stack Rust Entegrasyonu  
### 🔹 Kategori: Web servisleriyle etkileşimli CLI araçları yazma  
#### ✅ Cevap 694: Web servisleriyle etkileşimli CLI araçları yazma

Rust CLI aracı, HTTP istekleri için `reqwest` gibi kütüphaneler kullanarak web servisleriyle iletişim kurabilir. Araç, istek gönderip yanıtı işleyebilir.

Örnek:
```rust
use reqwest::blocking::get;

fn main() {
    let resp = get("https://api.github.com").unwrap().text().unwrap();
    println!("{}", resp);
}
```
Bu CLI aracı, bir web API'den yanıtı alıp ekrana yazdırır.
