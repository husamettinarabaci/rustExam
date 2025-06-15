## 📘 Bölüm: Traitler I  
### 🔹 Kategori: Where İfadelerinde Trait Sınırları  
#### ❓ Soru 208: `where` ifadeleri kullanımı

Generic parametreler için trait sınırlarını belirtmek amacıyla `where` ifadesi kullanan bir Rust fonksiyonu yazın.

- `Displayable` adında bir trait tanımlayın ve `display()` adında bir metot ekleyin.
- `Serializable` adında bir trait tanımlayın ve `serialize()` adında bir metot ekleyin, `String` döndürsün.
- Her iki trait'i de uygulayan `User` adında bir struct oluşturun.
- Generic parametre için trait sınırlarını `where` ifadesiyle belirten bir `show_and_serialize` fonksiyonu yazın.
- `main` fonksiyonunda bir `User` oluşturup `show_and_serialize` fonksiyonunu çağırın ve sonucu yazdırın.

🔧 **Görev:** Rust'ta fonksiyon imzalarında karmaşık trait sınırlarını belirtmek için `where` ifadesinin nasıl kullanılacağını gösterin.
