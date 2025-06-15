## 📘 Bölüm: Traitler I  
### 🔹 Kategori: Fonksiyon İmzalarında Trait Sınırları  
#### ❓ Soru 206: Fonksiyon imzalarında trait sınırları

Bir fonksiyonun imzasında trait sınırlarını (trait bounds) kullanarak, belirli bir trait'i uygulayan herhangi bir türü kabul eden bir Rust fonksiyonu yazın.

- `Summarizable` adında bir trait tanımlayın ve `summary()` adında bir metot ekleyin, `String` döndürsün.
- En az iki struct için (`Article` ve `Tweet` gibi) `Summarizable` trait'ini uygulayın.
- `print_summary` adında, trait sınırı ile generic parametre alan ve özeti yazdıran bir fonksiyon yazın (`T: Summarizable`).
- `main` fonksiyonunda her iki struct'tan da örnekler oluşturup `print_summary` fonksiyonunu çağırın.

🔧 **Görev:** Rust'ta fonksiyon imzalarında trait sınırlarının nasıl kullanılacağını ve belirli bir trait'i uygulayan türlerin bu fonksiyonlara nasıl geçirilebileceğini gösterin.
