## 📘 Bölüm: İleri Hata Yönetimi ve Kurtarma
### 🔹 Kategori: Detaylı varyantlarla özel hata enumları tasarlama
#### ❓ Soru 671: Detaylı varyantlarla özel hata enumları tasarlama

Aşağıdaki adımları izleyerek detaylı varyantlara sahip özel bir hata enum'u tasarlayan bir Rust programı yazın:

- Farklı hata senaryolarını temsil eden en az üç varyantı olan `UygulamaHatasi` adında bir enum tanımlayın (ör: Bulunamadi, GecersizGirdi, IoHatasi).
- Hata enum'unuz için kullanıcı dostu hata mesajları sağlamak amacıyla `std::fmt::Display` trait'ini uygulayın.
- İsteğe bağlı olarak, enum için `std::error::Error` trait'ini de uygulayın.
- Farklı hata varyantlarını döndürebilen bir fonksiyonda bu özel hata tipinin nasıl kullanılacağını gösterin.

🔧 **Görev:** Uygulama hatalarını özel bir enum ile modelleyin ve hata yönetiminde kullanımını gösterin.
