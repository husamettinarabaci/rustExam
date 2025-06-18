## 📘 Bölüm: Alan Odaklı Tasarım
### 🔹 Kategori: Değer nesneleri ve kümeleri implementasyonu
#### ✅ Cevap 663: Değer nesneleri ve kümeleri implementasyonu

Değer nesneleri, kimlikten ziyade değere göre karşılaştırılan tiplerdir. Kümeler ise birden fazla nesnenin bir arada tutulduğu yapılardır. Rust'ta değer nesneleri için struct ve `PartialEq` implementasyonu kullanılır.

```rust
#[derive(Debug, PartialEq)]
struct Eposta(String);

struct Kullanici {
    eposta: Eposta,
    // ... diğer alanlar ...
}

fn main() {
    let e1 = Eposta("ayse@example.com".to_string());
    let e2 = Eposta("ayse@example.com".to_string());
    assert_eq!(e1, e2); // Değer eşitliği
}
```
