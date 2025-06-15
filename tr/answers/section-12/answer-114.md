## 📘 Bölüm: Enumlar II  
### 🔹 Kategori: İleri Düzey Eşleme ve Enum Kullanımı  
#### ✅ Cevap 114: Enumlarla `if let` kullanımı

Bu örnekte, Rust'ta enumlar ile `if let` kullanılarak belirli bir varyantın nasıl kontrol edileceği ve değerin nasıl alınacağı gösterilmektedir. `if let`, yalnızca bir varyantla ilgilenildiğinde ve diğerleri göz ardı edilmek istendiğinde kullanışlıdır.

```rust
enum Durum {
    Basarili(i32),
    Hata(String),
}

fn main() {
    let sonuc = Durum::Basarili(200);
    if let Durum::Basarili(kod) = sonuc {
        println!("Başarılı kod: {}", kod);
    }
}
```
