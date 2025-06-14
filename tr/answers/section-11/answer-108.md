## 📘 Bölüm: Traitler ve Nesne Güvenliği  
### 🔹 Kategori: impl Trait Kullanımı  
#### ✅ Cevap 108: impl Trait ifadesi nedir?

**Açıklama:**
`impl Trait` ifadesi, fonksiyon dönüş tiplerinde veya parametrelerinde bir trait'i uygulayan herhangi bir tipi belirtmek için kullanılır. Örneğin, `fn foo() -> impl Iterator<Item=i32>` fonksiyonu, bir `Iterator` döndürdüğünü belirtir, ancak tam tipi gizler.
