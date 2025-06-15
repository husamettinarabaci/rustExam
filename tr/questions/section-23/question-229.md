## 📘 Bölüm: Jenerikler II  
### 🔹 Kategori: Jenerik tür takma adları  
#### ❓ Soru 229: Jenerik tür takma adı tanımlama ve kullanma

Jenerik tür takma adlarının kullanımını gösteren bir Rust örneği yazın.

- `Result<T, String>` için `ResultString<T>` adında bir tür takma adı tanımlayın.
- Bir string slice alan ve `ResultString<i32>` döndüren `parse_number` fonksiyonu yazın.
- Fonksiyon, stringi `i32` olarak parse etmeye çalışmalı ve hata durumunda bir hata mesajı döndürmeli.
- Bu fonksiyonu kullanarak hem başarılı hem de hatalı durumları örnekleyin.

🔧 **Görev:** Fonksiyon imzalarını ve hata yönetimini sadeleştirmek için jenerik tür takma adı kullanın.
