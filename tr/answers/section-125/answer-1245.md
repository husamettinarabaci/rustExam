## 📘 Bölüm: Yüksek Güvenlikli Sistemler için Rust
### 🔹 Kategori: Hata Toleransı ve Kurtarma Mekanizmaları
#### ✅ Cevap 1245: Hata toleransı ve kurtarma mekanizmaları

Hata toleransı, bir sistemin hata durumunda çalışmaya devam etmesini; kurtarma ise hatadan sonra normale dönmesini sağlar. Rust'ta `Result`, hata yönetimi ve tekrar deneme mantığı bu mekanizmaları destekler.

```rust
fn dosya_oku(path: &str) -> Result<String, std::io::Error> {
    std::fs::read_to_string(path)
}

fn main() {
    match dosya_oku("veri.txt") {
        Ok(veri) => println!("Okundu: {}", veri),
        Err(e) => println!("Hata sonrası kurtarma: {}", e),
    }
}
```

Bu kod, hataları zarifçe yöneterek hata toleransı ve kurtarma sağlar.
