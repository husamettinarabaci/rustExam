## 📘 Bölüm: Trait Nesneleri ve VTable Mekanikleri
### 🔹 Kategori: Heterojen Koleksiyonlarda Trait Nesneleri Kullanımı
#### ❓ Soru 738: Heterojen koleksiyonlarda trait nesneleri kullanımı

Farklı tipleri tek bir koleksiyonda saklamak için trait nesnelerini (`Box<dyn Trait>`) nasıl kullanabileceğinizi gösteren bir Rust örneği yazın.

- Bir trait ve onu uygulayan birden fazla struct tanımlayın.
- Bu struct örneklerini bir `Vec<Box<dyn Trait>>` içinde saklayın.
- Koleksiyon üzerinde yineleyip trait metodunu çağırın.

🔧 **Görev:** Rust'ta heterojen koleksiyonlar için trait nesnelerinin nasıl kullanılacağını gösterin.
