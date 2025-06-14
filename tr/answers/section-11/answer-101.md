## 📘 Bölüm: Traitler ve Nesne Güvenliği  
### 🔹 Kategori: Trait Object Kavramı  
#### ✅ Cevap 101: Trait object nedir?

**Açıklama:**
Rust'ta "trait object", çalışma zamanında farklı tiplerin aynı arayüzü (trait) paylaştığı durumlarda kullanılır. Trait object'ler, dinamik dispatch ile fonksiyon çağrılarını yönlendirir ve genellikle `dyn Trait` ile tanımlanır. Örneğin: `Box<dyn Trait>`. Bu sayede farklı tipler tek bir koleksiyonda saklanabilir ve ortak arayüzden erişilebilir.
