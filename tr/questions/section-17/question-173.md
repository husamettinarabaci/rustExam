## 📘 Bölüm: Hata Yönetimi ve Result Tipleri  
### 🔹 Kategori: Özel Hata Tipleri  
#### ❓ Soru 173: Özel hata tipi tanımlama ve kullanımı

Bir enum ile özel bir hata tipi oluşturun ve bunun için `std::fmt::Display` trait'ini implement edin. Bu hata tipini döndüren bir fonksiyon yazın.

- `MyError` adında en az iki varyantlı bir enum tanımlayın.
- `MyError` için `Display` implement edin.
- `Result<T, MyError>` döndüren bir fonksiyon yazın.

🔧 **Görev:** Hata verebilen bir fonksiyonda özel hata tipi tanımlayın ve kullanın.
