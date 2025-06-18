## 📘 Bölüm: Alan Odaklı Tasarım
### 🔹 Kategori: Alan varlıklarını struct ve enumlarla modelleme
#### ✅ Cevap 661: Alan varlıklarını struct ve enumlarla modelleme

Rust'ta alan (domain) varlıkları genellikle struct ve enum kullanılarak modellenir. Struct'lar veri alanlarını, enum'lar ise olası durumları veya varyantları temsil etmek için kullanılır.

```rust
// Örnek: Kullanıcı varlığı ve Durum enum'u
#[derive(Debug)]
struct Kullanici {
    id: u32,
    isim: String,
    durum: Durum,
}

#[derive(Debug)]
enum Durum {
    Aktif,
    Pasif,
    Yasakli,
}

fn main() {
    let kullanici = Kullanici {
        id: 1,
        isim: "Ayşe".to_string(),
        durum: Durum::Aktif,
    };
    println!("{:?}", kullanici);
}
```
