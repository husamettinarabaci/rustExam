## 📘 Bölüm: Enumlar I  
### 🔹 Kategori: Enumlarda Desen Eşleme  
#### ✅ Cevap 103: Enumlarda desen eşleme

Bu örnekte, Rust'ta bir enum üzerinde desen eşleme nasıl yapılır gösterilmektedir. `match` ifadesiyle her varyant farklı şekilde ele alınabilir ve veri tutan varyantlardan veri çıkarılabilir.

```rust
enum Durum {
    Basarili,
    Hata(String),
}

fn main() {
    let sonuc = Durum::Hata(String::from("Dosya bulunamadı"));
    match sonuc {
        Durum::Basarili => println!("İşlem başarılı!"),
        Durum::Hata(mesaj) => println!("Hata: {}", mesaj),
    }
}
```
