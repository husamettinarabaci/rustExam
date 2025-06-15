## 📘 Bölüm: Hata Yönetimi  
### 🔹 Kategori: Box<dyn Error> ile Dinamik Hatalar  
#### ❓ Soru 194: Dinamik hatalar için `Box<dyn Error>` kullanımı

Dinamik hata yönetimi için `Result<T, Box<dyn std::error::Error>>` döndüren bir Rust fonksiyonu yazın.

- Farklı hata türlerini `Box<dyn Error>` ile döndürebilen bir fonksiyon tanımlayın.
- Fonksiyonda standart kütüphane hatalarını (ör. parse veya IO hataları) kullanın.
- Bu fonksiyonu çağırıp hataları `main` fonksiyonunda nasıl ele alacağınızı gösterin.

🔧 **Görev:** Rust fonksiyonlarında esnek hata türü olarak `Box<dyn Error>` kullanımını gösterin.
