## 📘 Bölüm: İleri Hata Yönetimi ve Kurtarma
### 🔹 Kategori: Uygulamalarda panikleri zarifçe yönetme
#### ✅ Cevap 676: Uygulamalarda panikleri zarifçe yönetme

`std::panic::catch_unwind` ile panikleri yakalayarak uygulamanızın beklenmedik şekilde çökmesini önleyebilirsiniz.

```rust
use std::panic;

fn main() {
    let sonuc = panic::catch_unwind(|| {
        panic!("Bir şeyler ters gitti!");
    });

    match sonuc {
        Ok(_) => println!("Panik oluşmadı."),
        Err(e) => println!("Panik yakalandı: {:?}", e),
    }
}
```
