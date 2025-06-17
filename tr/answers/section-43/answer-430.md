## 📘 Bölüm: Enumlar ve Veri Modelleme  
### 🔹 Kategori: API hata tipleri için enumlardan yararlanma  
#### ✅ Cevap 430: API hata tipleri için enumlardan yararlanma

API'lerde farklı hata türlerini modellemek için enumlar kullanılabilir. Her hata türü bir enum varyantı olarak tanımlanır.

```rust
enum ApiError {
    NotFound,
    Unauthorized,
    Internal(String),
}

fn handle_error(err: ApiError) {
    match err {
        ApiError::NotFound => println!("Kaynak bulunamadı."),
        ApiError::Unauthorized => println!("Yetkisiz erişim."),
        ApiError::Internal(msg) => println!("Sunucu hatası: {}", msg),
    }
}
```
