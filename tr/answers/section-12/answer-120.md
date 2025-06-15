## 📘 Bölüm: Enumlar II  
### 🔹 Kategori: Joker Desenle Eşleme  
#### ✅ Cevap 120: Joker desenle eşleme

Bu örnekte, Rust'ta match ifadesinde joker desen (`_`) kullanılarak enumların nasıl eşleneceği gösterilmektedir. Joker desen, açıkça belirtilmeyen tüm durumları yakalamak için kullanılır.

```rust
enum Durum {
    Basarili,
    Hata,
    Beklemede,
}

fn main() {
    let durum = Durum::Beklemede;
    match durum {
        Durum::Basarili => println!("İşlem başarılı!"),
        _ => println!("Başarılı değil."),
    }
}
```
