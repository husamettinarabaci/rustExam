## 📘 Bölüm: Traitler I  
### 🔹 Kategori: Trait Nesneleri ve Dinamik Dağıtım  
#### ❓ Soru 203: Trait nesneleri kullanımı

Trait nesneleriyle dinamik dağıtımın nasıl yapılacağını gösteren bir Rust programı yazın.

- `Shape` adında bir trait tanımlayın ve `area()` adında bir metot ekleyin, `f64` döndürsün.
- En az iki struct için (`Circle` ve `Rectangle` gibi) `Shape` trait'ini uygulayın.
- Farklı şekilleri içeren bir trait nesneleri vektörü oluşturun (`Vec<Box<dyn Shape>>`).
- Vektör üzerinde dolaşarak her şeklin alanını dinamik dağıtım ile yazdırın.

🔧 **Görev:** Farklı türleri aynı trait ile saklamak ve dinamik dağıtım sağlamak için trait nesnelerinin (`Box<dyn Trait>`) nasıl kullanılacağını gösterin.
