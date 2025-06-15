## 📘 Bölüm: Option ve Result Türleri  
### 🔹 Kategori: Varsayılan Değerle Açma  
#### ❓ Soru 187: `unwrap_or` ve `unwrap_or_else` kullanımı

Bir `Option<&str>` alan ve `i32` döndüren bir Rust fonksiyonu yazın. Eğer option `None` ise veya parse işlemi başarısız olursa, `unwrap_or` ve `unwrap_or_else` ile varsayılan değerler sağlayın. Farklı girdilerle fonksiyonun nasıl çağrılacağını gösterin.

- Girdi olarak `Option<&str>` alın.
- `unwrap_or` ile `Option` için varsayılan değer verin.
- `unwrap_or_else` ile `Result` için varsayılan değer verin.
- Fonksiyonu hem `Some` hem de `None` ve geçerli/geçersiz stringlerle çağırmayı gösterin.

🔧 **Görev:** Rust'ta varsayılan değerlerle `unwrap_or` ve `unwrap_or_else` kullanımını gösterin.
