## 📘 Bölüm: Hata Yönetimi ve Result Tipleri  
### 🔹 Kategori: Temel Hata Yönetimi  
#### ❓ Soru 171: Hata yönetimi için Result tipinin kullanımı

Bir string'i tam sayıya çevirmeye çalışan ve `Result<i32, String>` döndüren bir fonksiyon yazın. Çevirme başarısız olursa uygun bir hata mesajı döndürün.

- `parse_to_int` adında bir fonksiyon tanımlayın.
- Rust'ın `parse` metodunu kullanın ve hataları yönetin.
- Başarıda `Ok(i32)`, hatada `Err(String)` döndürün.

🔧 **Görev:** Bir fonksiyonda olası çevirme hatalarını yönetmek için `Result` tipini kullanın.
