## 📘 Bölüm: Derleyici İç Yapısı ve Dil Tasarımı  
### 🔹 Kategori: Yeni dil özellikleri tasarlama  
#### ✅ Cevap 963: Rust için yeni dil özellikleri tasarlama

Rust'a yeni bir dil özelliği eklemek için genellikle şu adımlar izlenir: (1) Özellik için bir RFC hazırlanır, (2) topluluk ve çekirdek ekip tarafından tartışılır, (3) derleyiciye sözdizimi ve semantik eklenir, (4) testler ve dokümantasyon yazılır.

Örneğin, `defer` adlı yeni bir anahtar kelime eklemek istiyoruz. Sözdizimi: `defer { ... }`. Bu, blok sonunda çalışacak kodu belirtir. Derleyiciye eklemek için lexer, parser ve kod üretim aşamalarında değişiklik yapılır.
